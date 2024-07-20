const Database = require("better-sqlite3")

const db = new Database("lectures.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS lectures(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    surname TEXT ,
    salary INTEGER)`)