"use client";

import React from "react";
import { IUser } from "./types";
interface Props {
  user: IUser;
}

const User = ({ user }: Props) => {
  return (
    <div>
      <p>
        {user.name} {user.surname}
      </p>
      <strong>{user.salary} AMD</strong>
      <button onClick={() => alert("ok")}>Hello</button>
    </div>
  );
};

export default User;
