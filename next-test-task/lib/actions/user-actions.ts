"use server";

import { addUser, InputUser } from "../api";
import { redirect } from "next/navigation";

export const handleAdd = (data: FormData) => {
  let user: InputUser = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    createdDate: Date.now(),
  };
  addUser(user);
  redirect("/users");
};
