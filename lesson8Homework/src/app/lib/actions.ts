"use server";

import { nanoid } from "nanoid";
import { OptionalUser } from "./types";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { addUser, getUserByLogin } from "./api";

export const handleSignUp = async (prev: unknown, data: FormData) => {
  const user: OptionalUser = {
    id: nanoid(),
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    login: data.get("login") as string,
    password: data.get("password") as string,
  };
  const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const login = data.get("login") as string;
  const existingUser = getUserByLogin(login);

  if (existingUser) {
    return {
      message: "This user already exists",
    };
  }

  if (
    !data.get("name") ||
    !data.get("surname") ||
    !data.get("login") ||
    !data.get("password")
  ) {
    return {
      message: "Please fill all the fields",
    };
  }

  if (!user.password?.match(passwordRegexp)) {
    return {
      message:
        "Password must contain at least 6 characters, including letters and numbers.",
    };
  }

  user.password = await bcrypt.hash(data.get("password") as string, 10);

  console.log(addUser(user));
  redirect("/login");
};

export const handleLogin = async (prev: unknown, data: FormData) => {
  if (!data.get("login") || !data.get("password")) {
    return {
      error: true,
      message: "Please provide both login and password.",
    };
  }

  let password = data.get("password") as string;

  const user: OptionalUser = {
    login: data.get("login") as string,
    password: data.get("password") as string,
  };

  const findUser = await getUserByLogin(user.login as string);

  if (!findUser || !findUser.password) {
    return {
      message: "User not found.",
    };
  }

  const isPasswordCorrect = await bcrypt.compare(password, findUser.password);

  if (!isPasswordCorrect) {
    return {
      message: "Wrong password.",
    };
  }

  redirect("/profile");
};
