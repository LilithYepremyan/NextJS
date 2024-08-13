"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IUser } from "./types";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleDeleteUser = (id: number) => {
    axios.delete(`/users/${id}`).then((res) => {
      console.log(res);
      setUsers(users.filter((user) => user.id !== id));
    });
    console.log("delete !!!!");
  };

  return (
    <>
      <div>UserList</div>
      <Link href="/users/add">Add User</Link>
      {users.map((elm) => (
        <div
          className="box m-5 p-5"
          key={elm.id}
          style={{ background: "lightgray", width: "400px" }}
        >
          <p>
            {elm.name} {elm.surname}
          </p>
          <strong>{elm.salary} AMD </strong>
          <br></br>
          <Link className="button is-link " href={`/users/${elm.id}/details`}>
            go to account
          </Link>
          <button
            className="button mx-5"
            onClick={() => handleDeleteUser(elm.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default UserList;
