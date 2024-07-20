"use server";

import { redirect } from "next/navigation";
import { addLecture, editLecture, InputLecture } from "../api";

export const handleAddLecture = (data: FormData) => {
  let lecture: InputLecture = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    salary: +(data.get("salary") as string),
  };

  addLecture(lecture);
  redirect("/");
};

export const handleEditLecture = (data: FormData) => {
  let lecture: InputLecture = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    salary: +(data.get("salary") as string),
  };

  // editLecture(lecture);
  redirect("/");
};
