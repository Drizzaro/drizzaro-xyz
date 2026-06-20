import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";
import { head, put } from "@vercel/blob";

export function useBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readJsonBlob<T>(pathname: string, fallback: T): Promise<T> {
  try {
    const metadata = await head(pathname);
    if (!metadata?.url) return fallback;
    const response = await fetch(metadata.url);
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

async function writeJsonBlob<T>(pathname: string, data: T): Promise<void> {
  await put(pathname, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return fallback;
  }
}

function writeJsonFile<T>(filePath: string, data: T): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
  }
}

export async function readJsonStore<T>(pathname: string, localFileName: string, fallback: T): Promise<T> {
  if (useBlobStorage()) {
    return readJsonBlob(pathname, fallback);
  }
  return readJsonFile(path.join(process.cwd(), localFileName), fallback);
}

export async function writeJsonStore<T>(pathname: string, localFileName: string, data: T): Promise<void> {
  if (useBlobStorage()) {
    await writeJsonBlob(pathname, data);
    return;
  }
  writeJsonFile(path.join(process.cwd(), localFileName), data);
}

export async function uploadBinary(
  pathname: string,
  data: Buffer,
  contentType: string,
): Promise<string> {
  if (useBlobStorage()) {
    const blob = await put(pathname, data, {
      access: "public",
      contentType,
    });
    return blob.url;
  }

  const filePath = path.join(process.cwd(), pathname);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, data);
  return `/${pathname.replace(/\\/g, "/")}`;
}
