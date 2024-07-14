import { readFile } from "fs/promises";
import { IBook } from "./types";

export const getAllBooks = async (): Promise<IBook[]> => {
  const data = await readFile("books.json", "utf-8");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

export const getBookById = async (id: number): Promise<IBook | undefined> => {
  const data = await getAllBooks();
  const findBook = data.find((book) => book.id == id);

  return findBook;
};
