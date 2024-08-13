"use client";

import { InputUser } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState<InputUser>({
    name: "",
    surname: "",
    salary: 67500,
  });

  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(user);

    if (!user.name.trim() || !user.surname.trim()) {
      setError("Please fill all the fields");
    } else {
      setError("");
      axios.post("/users", user).then((res) => {
        console.log(res.data);
        router.push("/");
      });
    }
  };

  return (
    <>
      <h1>Add User</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "300px",
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="surname"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />
        <input
          type="text"
          placeholder="salary"
          value={user.salary}
          onChange={(e) => setUser({ ...user, salary: +e.target.value })}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddUser;
