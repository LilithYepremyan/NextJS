import { getCourseById } from "@/app/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IProps {
  params: { key: number };
}

export const generateMetadata = async ({ params: { key } }: IProps) => {
  const course = getCourseById(key);

  if (!course) {
    notFound();
  }
  return {
    title: "COURSE" + course.name,
  };
};

export default function Page({ params: { key } }: IProps) {
  console.log("Dynamic>>>");

  const course = getCourseById(key);
  if (!course) {
    notFound();
  }
  return (
    <>
      <h1 className="is-size-1 is-color-danger">{course.name}</h1>
      <Image src={course.cover} width={200} height={200} alt="" />
      <p>
        <strong>duration:</strong> {course.duration} months
      </p>
      <p>
        <strong>price:</strong> {course.price} AMD/month
      </p>
      <p className="is-size-4">
        <strong>Total:</strong> {course.duration * course.price} AMD
      </p>
    </>
  );
}
