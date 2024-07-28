"use server";

import { OptionalUser } from "./types";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import { addUser, getUserByLogin } from "./api";
import { redirect } from "next/navigation";
import { createAuthSession, destroySession, lucia } from "./auth";
import { cookies } from "next/headers";

export const handleSignup = async (prev: unknown, data: FormData) => {
  if (!data.get("name") || !data.get("surname")) {
    return {
      message: "Please fill all the fields",
    };
  }

  const found = getUserByLogin(data.get("login") as string);
  if (found) {
    return {
      message: "Login is busy!",
    };
  }

  const user: OptionalUser = {
    id: nanoid(),
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    login: data.get("login") as string,
  };

  user.password = await bcrypt.hash(data.get("password") as string, 10);
  console.log(addUser(user));
  redirect("/login");
};

export const handleLogin = async (prev: unknown, data: FormData) => {
  if (!data.get("login") || !data.get("password")) {
    return {
      message: "please fill all the fields",
    };
  }

  let login = data.get("login") as string;
  let password = data.get("password") as string;

  let user = getUserByLogin(login);
  if (!user) {
    return {
      message: "the login is incorrect!",
    };
  }
  let match = await bcrypt.compare(password, user.password);
  if (!match) {
    return {
      message: "password is wrong!!",
    };
  }

  await createAuthSession(user.id);
  redirect("/profile");
};

export const handleLogout = async () => {
  await destroySession();
  redirect("/login");
};
