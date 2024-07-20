"use server";

import { createWriteStream } from "fs";
import { InputCourse, addCourse } from "../api";
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
