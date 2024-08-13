import UserList from "@/lib/user-list";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Link className="button ml-5" href="/users/add">Add user</Link>
      <UserList />
    </>
  );
};

export default page;
