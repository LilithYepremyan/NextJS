"use server";

import { nanoid } from "nanoid";
import { OptionalUser } from "./types";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { addUser } from "./api";

export const handleSignUp = async (prev: unknown, data: FormData) => {
  if (!data.get("name") || !data.get("surname")) {
    return {
      message: "Please fill all the fields",
    };
  }

  const user: OptionalUser = {
    id: nanoid(),
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    login: data.get("login") as string,
  };

  user.password = await bcrypt.hash(data.get("password") as string, 10);
  console.log(addUser(user))
  redirect("/login");
};
