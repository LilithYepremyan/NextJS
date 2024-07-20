import Database from "better-sqlite3";
const db = new Database("courses.db");

export interface ICourse {
  id: number;
  price: number;
  duration: number;
  name: string;
  cover: string;
}

export type InputCourse = Omit<ICourse, "id">;

export const getAllCourses = (): ICourse[] => {
  return db.prepare("SELECT * FROM courses").all() as ICourse[];
};

export const addCourse = (course: InputCourse) => {
  db.prepare(
    `INSERT INTO courses(name, price, duration, cover)
     VALUES(@name, @price, @duration , @cover)
    `
  ).run(course);
};
