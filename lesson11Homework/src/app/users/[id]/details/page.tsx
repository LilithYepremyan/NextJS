"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const Page = ({ params }: Props) => {
  // const findUser = getUserById(params.id);
  // console.log(findUser, "findUser");

  const handleUpdate = () => {
    axios.put("/users/" + params.id, { name: "ok" }).then((res) => {
      console.log(res.data);
    });
  };

  const handleDelete = () => {
    axios.delete("/users/" + params.id).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="box">User details No. {params.id}</div>
      <Link
        href={"/users/" + params.id + "/details/updateDetails"}
        className="link is-link mx-2"
        onClick={handleUpdate}
      >
        Update
      </Link>
      <button className="button is-danger mx-2" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Page;
