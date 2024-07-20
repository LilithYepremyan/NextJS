import Image from "next/image";
import { ICourse } from "../api";
import Link from "next/link";

interface IProps {
  courses: ICourse[];
}

const CourseList = ({ courses }: IProps) => {
  return (
    <>
      <div className="columns">
        {courses.map((course) => (
          <div key={course.id} className="column">
            <Image
              src={"/" + course.cover}
              width={100}
              height={100}
              alt={course.name}
            />
            <p>{course.name}</p>
            <p>for {course.duration} month</p>
            <p>{course.price} AMD per month</p>
            <Link href={"/courses/edit/" + course.id}>Edit</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
