"use server";

import { createWriteStream } from "fs";
import { InputCourse, addCourse, updateCourse } from "../api";
import { redirect } from "next/navigation";

export const handleAdd = async (data: FormData) => {
  let photo = data.get("cover") as File;
  const fileName = Date.now() + "." + photo.type.split("/").at(-1);

  const stream = createWriteStream("public/images/" + fileName);
  const bufferedImage = await photo.arrayBuffer();
  stream.write(Buffer.from(bufferedImage));

  let course: InputCourse = {
    name: data.get("name") as string,
    cover: "images/" + fileName,
    price: +(data.get("price") as string),
    duration: +(data.get("duration") as string),
  };

  addCourse(course);
  redirect("/");
};

export const handleUpdate = async (data: FormData) => {
  const id = Number(data.get("id"));
  const name = data.get("name") as string;
  const price = Number(data.get("price"));
  const duration = Number(data.get("duration"));
  let cover = data.get("cover") as string;

  const updatedCourse: InputCourse = { name, price, duration, cover };

  updateCourse(id, updatedCourse);

  redirect("/");
};
