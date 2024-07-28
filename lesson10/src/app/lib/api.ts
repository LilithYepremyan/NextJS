import Database from 'better-sqlite3'

export interface ICourse {
    id: number
    name: string
    price: number
    cover: string
    duration: number
}

export type InputCourse = Omit<ICourse, 'id'>

const db = new Database("courses.db")


export const addCourse = (course: InputCourse) => {
    db.prepare(`
            INSERT INTO courses(name, price, cover, duration)
            VALUES(@name, @price, @cover, @duration)
    `).run(course)
}

export const getAllCourses = (): ICourse[] => {
    return db.prepare(`
            SELECT * FROM courses
    `).all() as ICourse[]
}

export const getCourseById = (id: number): ICourse => {
    return db.prepare(`
        SELECT * FROM courses where id=?
`).get(id) as ICourse
}