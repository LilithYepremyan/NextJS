"use server";

import { addUser, getAllUsers, InputUser, updateUserCount } from "../api";
import { redirect } from "next/navigation";

export const handleAdd = (data: FormData) => {
  const users = getAllUsers();

  console.log(users);

  let user: InputUser = {
    name: data.get("name") as string,
    surname: data.get("surname") as string,
    nickname: data.get("nickname") as string,
  };

  {
    const findUser = users.find((u) => u.nickname == user.nickname);
    if (findUser) {
      updateUserCount(user.nickname);
      redirect("/users");
    } else {
      addUser(user);
      redirect("/users");
    }
  }
};
