"use client";

import React, { useEffect, useState } from "react";
import { IUser } from "./types";
import axios from "axios";
import Link from "next/link";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      console.log(res.data);
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div className="container">
      <h3 className="title is-3">User list</h3>
      <div className="columns is-multiline">
        {users.map((elm) => (
          <div  className="column is-one-third" key={elm.id}>
            <div className="box">
            <p>
              {elm.name}
              {elm.surname}
            </p>
            <strong>{elm.salary} AMD</strong>
            <Link className="button is-link " href={"/users/" + elm.id + "/details"}> Go to account</Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
