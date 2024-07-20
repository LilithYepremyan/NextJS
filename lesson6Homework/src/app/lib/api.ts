import Database from "better-sqlite3";

const db = new Database("lectures.db");

interface ILecture {
  id: number;
  name: string;
  surname: string;
  salary: number;
}

export type InputLecture = Omit<ILecture, "id">;

export const getAllLecture = (): ILecture[] => {
  return db.prepare("SELECT * FROM lectures").all() as ILecture[];
};

export const addLecture = (lecture: InputLecture) => {
  db.prepare(
    `INSERT INTO lectures(name, surname , salary)
        VALUES(@name, @surname, @salary)`
  ).run(lecture);
};

export const editLecture = (id: number, lecture: InputLecture) => {
  console.log("Received id:", id);
  console.log("Received lecture:", lecture);

  const { name, surname, salary } = lecture;

  db.prepare(
    `UPDATE  lectures SET name = ?, surname = ?, salary = ? WHERE id = ?`
  ).run(name, surname, salary, id);
};

export const getLectureById = (id: number): ILecture => {
  return db.prepare(`SELECT * FROM lectures WHERE id =?`).get(id) as ILecture;
};
