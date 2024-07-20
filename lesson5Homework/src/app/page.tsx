import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";
import Link from "next/link";

export default function Home() {
  const result = getAllCourses();
  console.log(result);

  return (
    <>
      <h1>All Courses</h1>
      {result.map((el) => (
        <div className="box has-text-danger">
          <h1>Name: {el.name}</h1>
          <h2>Price: {el.price} AMD</h2>
          <h2>Duration: {el.duration} month </h2>
          <Image src={`/${el.cover}`} width={200} height={250} alt={el.name} />
          <div>
            <Link
              className="button is-link is-light mx-1"
              href={`/details/${el.id}`}
            >
              Details
            </Link>
            <Link
              className="button is-link is-light mx-1"
              href={`/edit/${el.id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
