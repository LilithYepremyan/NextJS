import React from "react";
import Image from "next/image";
import { getCourseById } from "@/app/lib/api";

interface IProps {
  params: { id: number };
}

const page = (props: IProps) => {
  const result = getCourseById(props.params.id);
  console.log(result);
  return (
    <div className="box">
      <h2>Course: {result.name}</h2>
      <h2>Price: {result.price}</h2>
      <h2>Duration: {result.duration}</h2>
      <Image
        src={`/${result.cover}`}
        width={200}
        height={250}
        alt={result.name}
      />
    </div>
  );
};

export default page;
