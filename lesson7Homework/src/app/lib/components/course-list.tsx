import Link from "next/link";
import { ICourse } from "../api";
import Image from "next/image";

interface IProps {
  courses: ICourse[];
}

export const CourseList = ({ courses }: IProps) => {
  return (
    <>
      <div className="columns">
        {courses.map((course) => (
          <div className="column" key={course.id}>
            <Image src={"/" + course.cover} width={100} height={100} alt="OK" />
            <p>{course.name}</p>
            <p>for {course.duration} months</p>
            <p>{course.price} AMD per month</p>
            {course.modules?.length && (
              <div className="box">
                <strong>Modules:</strong>
                <ul>
                  {course.modules.map((mod) => (
                    <li key={mod.id}>
                      {mod.title} for {mod.duration} months
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link href={"/courses/edit/" + course.id}>edit</Link>
          </div>
        ))}
      </div>
    </>
  );
};
