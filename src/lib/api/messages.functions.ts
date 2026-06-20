import { createServerFn } from "@tanstack/react-start";
import { readJsonStore, writeJsonStore } from "../blob-storage.server";

const MESSAGES_PATH = "shaurya/messages.json";
const MESSAGES_FILE = "messages.json";

type ContactMessage = {
  name: string;
  email: string;
  discord?: string;
  gameType: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
};

export const saveMessage = createServerFn({ method: "POST" })
  .validator((data: ContactMessage) => data)
  .handler(async ({ data }) => {
    const existingMessages = await readJsonStore<ContactMessage[]>(MESSAGES_PATH, MESSAGES_FILE, []);
    const newMessage = { ...data, timestamp: new Date().toISOString() };
    await writeJsonStore(MESSAGES_PATH, MESSAGES_FILE, [newMessage, ...existingMessages]);
    return { success: true };
  });

export const getMessages = createServerFn({ method: "GET" }).handler(async () => {
  return readJsonStore<ContactMessage[]>(MESSAGES_PATH, MESSAGES_FILE, []);
});
