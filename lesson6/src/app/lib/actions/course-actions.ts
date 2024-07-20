"use server";

import { createWriteStream } from "fs";
import { InputCourse, addCourse, updateCourseById } from "../api";
import { redirect } from "next/navigation";
import { log } from "console";

export const handleAdd = async (data: FormData) => {
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
    redirect("/");
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
