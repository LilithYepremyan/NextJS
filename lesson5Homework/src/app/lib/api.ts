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

export const getCourseById = (id: number): ICourse => {
  return db.prepare("SELECT * FROM courses WHERE id= ?").get(id) as ICourse;
};

export const updateCourse = (id: number, updatedCourse: InputCourse) => {
  console.log("IIIIID", id);
  console.log("course", updatedCourse);
  db.prepare(
    `
    UPDATE courses
    SET name = @name, price = @price, duration = @duration, cover = @cover 
    WHERE id = @id`
  ).run({ ...updatedCourse, id });
};
