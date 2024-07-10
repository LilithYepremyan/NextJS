import { readFile } from "fs/promises";
import { IUser } from "./types";

export const getAllUsers = async (): Promise<IUser[]> => {
  const data = await readFile("users.json", "utf-8");
  if(data){
    return JSON.parse(data)
  }
  return [];
};
