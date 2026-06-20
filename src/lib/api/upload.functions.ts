import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";
import type { Project } from "@/components/shaurya/data";
import { readJsonStore, uploadBinary, useBlobStorage, writeJsonStore } from "../blob-storage.server";

const UPLOADS_PATH = "shaurya/uploads.json";
const UPLOADS_FILE = "uploads.json";

const uploadSchema = z.object({
  fileName: z.string(),
  base64: z.string(),
  category: z.enum(["BGMI", "GTA V", "Valorant", "Minecraft"]),
});

async function readUploads(): Promise<Project[]> {
  return readJsonStore<Project[]>(UPLOADS_PATH, UPLOADS_FILE, []);
}

async function writeUploads(uploads: Project[]): Promise<void> {
  await writeJsonStore(UPLOADS_PATH, UPLOADS_FILE, uploads);
}

export const getUploadedProjects = createServerFn({ method: "GET" }).handler(async () => {
  return readUploads();
});

export const uploadImage = createServerFn({ method: "POST" })
  .validator(uploadSchema)
  .handler(async ({ data }) => {
    try {
      const { fileName, base64, category } = data;
      const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      const ext = path.extname(fileName) || ".png";
      const baseName = path.basename(fileName, ext).replace(/[^a-zA-Z0-9]/g, "") || "upload";
      const uniqueFileName = `${baseName}_${Date.now()}${ext}`;

      if (useBlobStorage()) {
        const imageUrl = await uploadBinary(
          `shaurya/uploads/${category}/${uniqueFileName}`,
          buffer,
          `image/${ext.replace(".", "") || "png"}`,
        );

        const uploads = await readUploads();
        const newProject: Project = {
          id: `upload-${Date.now()}`,
          title: "Uploaded Thumbnail",
          category,
          img: imageUrl,
          description: "Uploaded via admin panel.",
          client: "@admin",
          feedback: "New upload",
          galleryOnly: true,
        };

        await writeUploads([newProject, ...uploads]);
        return { success: true, message: "Image uploaded successfully!" };
      }

      const varName = `${baseName}_${Date.now()}`;
      const assetsDir = path.join(process.cwd(), "src", "assets");
      const filePath = path.join(assetsDir, uniqueFileName);
      const dataFilePath = path.join(process.cwd(), "src", "components", "shaurya", "data.ts");

      if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
      }
      fs.writeFileSync(filePath, buffer);

      let content = fs.readFileSync(dataFilePath, "utf-8");
      const newImport = `import ${varName} from "@/assets/${uniqueFileName}";`;
      const newProject = `  {
    id: "${varName}",
    title: "Uploaded Thumbnail",
    category: "${category}",
    img: ${varName},
    description: "Uploaded via admin panel.",
    client: "@admin",
    feedback: "New upload",
    galleryOnly: true,
  },`;

      const importMatches = [...content.matchAll(/^import .*;$/gm)];
      if (importMatches.length > 0) {
        const lastMatch = importMatches[importMatches.length - 1];
        const insertPos = (lastMatch.index ?? 0) + lastMatch[0].length;
        content = content.slice(0, insertPos) + "\n" + newImport + content.slice(insertPos);
      } else {
        content = newImport + "\n\n" + content;
      }

      const projArrayEnd = content.indexOf("];", content.lastIndexOf("export const projects"));
      if (projArrayEnd !== -1) {
        content = content.slice(0, projArrayEnd) + newProject + "\n" + content.slice(projArrayEnd);
      }

      fs.writeFileSync(dataFilePath, content, "utf-8");
      return { success: true, message: "Image uploaded successfully!" };
    } catch (error) {
      console.error("Upload Error:", error);
      return { success: false, message: "Failed to upload image." };
    }
  });
