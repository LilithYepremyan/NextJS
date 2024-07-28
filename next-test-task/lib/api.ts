import Database from "better-sqlite3";

const db = new Database("users.db");

export interface IUser {
  id: number;
  name: string;
  surname: string;
  createdDate: number;
}

export type InputUser = Omit<IUser, "id">;

export const getAllUsers = (): IUser[] => {
  return db.prepare("SELECT * FROM users").all() as IUser[];
};

export const addUser = (user: InputUser) => {
  db.prepare(
    `
        INSERT INTO users(name,surname,createdDate)
        VALUES(@name,@surname,@createdDate)`
  ).run(user);
};
