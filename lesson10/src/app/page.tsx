import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";
import { Suspense } from "react";
import { CourseList } from "./lib/components/course-list";

export default function Home() {
  console.log("Static rendering>>>");

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading...</p>}>
        <CourseList />
      </Suspense>
    </main>
  );
}
