import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import * as fs from "node:fs";
import * as path from "node:path";
import process from "node:process";

const MESSAGES_FILE = path.join(process.cwd(), "messages.json");

// Helper to read messages from the file
function readMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading messages file:", error);
  }
  return [];
}

// Helper to write messages to the file
function writeMessages(messages: any[]) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing messages file:", error);
  }
}

export const saveMessage = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    const existingMessages = readMessages();
    const newMessage = { ...data, timestamp: new Date().toISOString() };
    const updatedMessages = [newMessage, ...existingMessages];
    
    writeMessages(updatedMessages);
    
    return { success: true };
  });

export const getMessages = createServerFn({ method: "GET" })
  .handler(async () => {
    const messages = readMessages();
    return messages;
  });
