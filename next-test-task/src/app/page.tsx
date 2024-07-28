import Image from "next/image";
import styles from "./page.module.css";
import { getAllUsers } from "../../lib/api";

export default function Home() {
  // const result = getAllUsers();
  // console.log(result);

  return <main className={styles.main}>hello</main>;
}
