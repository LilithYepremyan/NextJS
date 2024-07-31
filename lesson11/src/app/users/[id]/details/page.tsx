"use client";
import axios from "axios";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const Page = ({ params }: Props) => {

  const handleUpdate = () => {
    axios.put("/users/" + params.id, { name: "ok" }).then((res) => {
      console.log(res.data);
    });
  };
  
  return (
    <>
      <div>User details No. {params.id}</div>
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default Page;
