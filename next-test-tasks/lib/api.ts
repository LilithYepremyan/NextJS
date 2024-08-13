import Database from "better-sqlite3";

const db = new Database("users.db");

export interface IUser {
  id: number;
  name: string;
  surname: string;
  nickname: string;
  count: number;
}

export type InputUser = Omit<IUser, "id" | "count">;

export const getAllUsers = (): IUser[] => {
  return db.prepare("SELECT * FROM users").all() as IUser[];
};

export const addUser = (user: InputUser) => {
  db.prepare(
    `
        INSERT INTO users(name,surname,nickname,count)
        VALUES(@name,@surname,@nickname,1)`
  ).run(user);
};

export const updateUserCount = (nickname: string) => {
  db.prepare(
    `
    UPDATE  users SET count = count + 1 WHERE nickname = ?`
  ).run(nickname);
};
