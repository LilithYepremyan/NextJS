import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";

export default function Home() {
  // const result = getAllCourses();
  // console.log(result);

  return <main className={styles.main}></main>;
}
