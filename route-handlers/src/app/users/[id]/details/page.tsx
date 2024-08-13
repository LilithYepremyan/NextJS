"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface Props {
  params: {
    id: string;
  };
}

const Page = (props: Props) => {
  //   const user = getUserById(props.params.id);

  const [user, setUser] = useState({
    name: "",
    surname: "",
    salary: 0,
  });

  const router = useRouter();

  useEffect(() => {
    axios.get(`/users/${props.params.id}`).then((res) => {
      console.log(res.data, "resss.data");
      setUser(res.data);
    });
  }, [props.params.id]);

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    axios.put(`/users/${props.params.id}`, user).then((res) => {
      console.log(res.data, "user. data>>");
      router.push("/");
    });
  };

  return (
    <>
      <div>{`Details ${props.params.id}`}</div>
      <form onSubmit={handleUpdate}>
        <div className="field my-4">
          <input
            type="text"
            placeholder="name"
            className="input is-dark my-2"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="surname"
            className="input is-dark my-2"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
          <input
            type="text"
            placeholder="salary"
            className="input is-dark my-2"
            value={user.salary}
            onChange={(e) => setUser({ ...user, salary: +e.target.value })}
          />
        </div>
        <button>Update</button>
      </form>
    </>
  );
};

export default Page;
