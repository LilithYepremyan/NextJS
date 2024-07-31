import Database from "better-sqlite3";
import { InputUser, IUser } from "./types";
const db = new Database("social.db");

export const addUser = (user: InputUser): Database.RunResult => {
  return db
    .prepare(
      `
        INSERT INTO users(name, surname, salary)
        VALUES(@name, @surname, @salary)`
    )
    .run(user);
};

export const getAllUsers = (): IUser[] => {
  return db.prepare(`SELECT * FROM users`).all() as IUser[];
};
