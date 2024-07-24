"use server";

import { createWriteStream } from "fs";
import {
  InputCourse,
  InputModule,
  addCourse,
  addModule,
  getAllCourses,
  updateCourseById,
} from "../api";
import { redirect } from "next/navigation";

const regexNumber = /^\d+$/;

const isValidNumber = (value: string | null) => {
  return value != null && value.match(regexNumber);
};

export const handleAdd = async (prev: unknown, data: FormData) => {
  const courses = getAllCourses();

  const name = data.get("name") as string;
  const duration = data.get("duration") as string;
  const price = data.get("price") as string;

  if (!isValidNumber(price)) {
    return {
      message: "Price must be a number",
      name,
      duration,
      price,
    };
  }

  if (!isValidNumber(duration)) {
    return {
      message: "Duration must be a number",
      name,
      duration,
      price,
    };
  }
  if (!data.get("name") && !data.get("duration") && !data.get("courseId")) {
    return {
      message: "Please fill all the fields",
      name: data.get("name"),
      duration: data.get("duration"),
      price: data.get("price"),
    };
  }

  const course: Partial<InputCourse> = {};

  if (isValidNumber(duration)) course.duration = +duration;
  if (isValidNumber(price)) course.price = +price;

  const foundCourse = courses.find((course) => course.name == name);
  if (foundCourse) {
    return {
      message: "Please choose another name for the course",
    };
  }

  const photo = data.get("cover") as File;
  if (photo) {
    let extension = photo.type.split("/").at(-1);
    const filename = Date.now() + "." + extension;

    const stream = createWriteStream("public/images/" + filename);

    const bufferedImage = await photo.arrayBuffer();

    stream.write(Buffer.from(bufferedImage));

    let course: InputCourse = {
      name: data.get("name") as string,
      price: +(data.get("price") as string),
      duration: +(data.get("duration") as string),
      cover: "images/" + filename,
    };

    addCourse(course);
    // redirect("/");
  }
};

export const handleUpdate = async (id: number, data: FormData) => {
  const course: Partial<InputCourse> = {
    name: data.get("name") as string,
    price: +(data.get("price") as string),
    duration: +(data.get("duration") as string),
  };

  const photo = data.get("cover") as File;
  if (photo.size > 0) {
    let extension = photo.type.split("/").at(-1);
    const filename = Date.now() + "." + extension;

    const stream = createWriteStream("public/images/" + filename);

    const bufferedImage = await photo.arrayBuffer();
    course.cover = "images/" + filename;
    stream.write(Buffer.from(bufferedImage));
  }

  updateCourseById(id, course);
  redirect("/courses");
};

export const handleAddModule = (data: FormData) => {
  let module: InputModule = {
    title: data.get("title") as string,
    duration: +(data.get("duration") as string),
    courseId: +(data.get("courseId") as string),
  };

  let result = addModule(module);
  console.log(result);
  redirect("/courses");
};
