import { getAllLecture } from "./lib/api";
import Link from "next/link";

export default function Home() {
  const res = getAllLecture();
  console.log(res);

  return (
    <>
      <h1 className="is-size-3 mx-5">Lectures</h1>
      <main className="columns">
        {res.map((el) => (
          <div className="column box mx-5 my-5" key={el.id}>
            <h1>{el.name} </h1>
            <h2>{el.surname} </h2>
            <h3>{el.salary} </h3>
            <Link href={`/lectures/edit/${el.id}`}>Edit</Link>
          </div>
        ))}
      </main>
    </>
  );
}
