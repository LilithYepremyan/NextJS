import Database from "better-sqlite3";

export interface ICourse {
  id: number;
  name: string;
  price: number;
  cover: string;
  duration: number;
}

export type InputCourse = Omit<ICourse, "id">;

const db = new Database("courses.db");

export const addCourse = (course: InputCourse) => {
  db.prepare(
    `
            INSERT INTO courses(name, price, cover, duration)
            VALUES(@name, @price, @cover, @duration)
    `
  ).run(course);
};

export const getAllCourses = (): ICourse[] => {
  return db
    .prepare(
      `
            SELECT * FROM courses
    `
    )
    .all() as ICourse[];
};

export const getCourseById = (id: number): ICourse => {
  return db.prepare("SELECT * FROM courses WHERE id = ?").get(id) as ICourse;
};

export const updateCourseById = (id: number, body: Partial<InputCourse>) => {
  if (!body.cover) {
    return db

      .prepare("UPDATE courses set name =?, price=? , duration =? WHERE id = ?")
      .run(body.name, body.price, body.duration, id);
  } else {
    return db
      .prepare(
        "UPDATE courses set name =?, price=? , duration =?, cover= ? WHERE id = ?"
      )
      .run(body.name, body.price, body.duration, body.cover, id);
  }
};
