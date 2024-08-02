const Database = require("better-sqlite3");
const db = new Database("test.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS writers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    century INTEGER)`);

const writers = [
  { name: "Kafka", century: 20 },
  { name: "Camus", century: 20 },
  { name: "Sartre", century: 20 },
  { name: "Defo", century: 18 },
  { name: "Russo", century: 15 },
  { name: "Shakespeare", century: 15 },
];

const stm = db.prepare(`
        INSERT INTO writers(name, century)
        VALUES(@name, @century)`);

writers.forEach((w) => stm.run(w));
