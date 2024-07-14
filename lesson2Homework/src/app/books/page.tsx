import { getAllBooks, getBookById } from "../lib/actions";
import styles from "./page.module.css";
import Link from "next/link";

const Page = async () => {
  const books = await getAllBooks();
  await getBookById(101);

  return (
    <>
      <div className={styles.wrapper}>
        {books.map((book) => (
          <div className={styles.container} key={book.id}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <img width={120} src={book.photo} alt={book.title} />
            <p>{book.price} USD</p>
            <Link className="has-text-info" href={`/books/${book.id}`}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
