import { getBookById } from "@/app/lib/actions";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface IProps {
  params: { id: number };
}

const Page = async (props: IProps) => {
  const book = await getBookById(props.params.id);

  if (!props.params.id || !book) {
    notFound();
  }

  return (
    <div className={styles.box} key={book.id}>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <img width={120} src={book.photo} alt={book.title} />
      <p>{book.price} USD</p>
    </div>
  );
};

export default Page;
