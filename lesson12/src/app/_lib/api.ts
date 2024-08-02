import Database from "better-sqlite3";
import { ICentury, IWriter } from "./types";
const db = new Database("test.db");

export const getTopWriters = (): IWriter[] => {
  return db
    .prepare(
      `
    SELECT * FROM writers
    ORDER BY id desc
    LIMIT 3`
    )
    .all() as IWriter[];
};

export const getCenturies = (): ICentury[] => {
  return db
    .prepare(
      `
  SELECT DISTINCT century FROM writers`
    )
    .all() as ICentury[];
};
