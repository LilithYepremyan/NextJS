const Database = require("better-sqlite3");
const db = new Database("courses.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS courses(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        duration INTEGER,
        price INTEGER,
        cover TEXT
    )

`);

db.exec(`CREATE TABLE IF NOT EXISTS modules(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    duration INTEGER,
    courseId INTEGER,
    FOREIGN KEY(courseId) REFERENCES courses(id) ON DELETE CASCADE )`);

// db.exec(`ALTER TABLE modules add surname TEXT`);
