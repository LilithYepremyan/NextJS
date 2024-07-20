import React from "react";
import { getAllCourses } from "../lib/api";
import CourseList from "../lib/components/course-list";

const page = () => {
  const list = getAllCourses();
  console.log(list);

  return (
    <>
      <h1 className="is-size-2">Courses</h1>
      <p>Choose the best courses in the world!</p>
      <CourseList courses={list} />
    </>
  );
};

export default page;
