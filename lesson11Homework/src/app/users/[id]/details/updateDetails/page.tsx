"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  // const [user, setUser] = useState<InputUser>({
  //   name: "",
  //   surname: "",
  //   salary: 65000,
  // });

  const router = useRouter();
  console.log(router);

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // axios.post("/users", user).then((res) => {
  //   router.push("/");
  // });
  // };

  const { register, handleSubmit } = useForm();

  const handleUpdate = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="title is-3">Update user details</h1>
      <form className="is-half" onSubmit={handleSubmit(handleUpdate)}>
        <div className="column is-half ">
          <label className="label">Name</label>
          <input
            className="input is-link is-half"
            type="text"
            placeholder="name"
            {...register("name")}
            // value={user.name}
            // onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="column is-half ">
          <label className="label">Surname</label>

          <input
            className="input is-link"
            type="text"
            placeholder="surname"
            {...register("surname")}
            // value={user.surname}
            // onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </div>
        <div className="column is-half ">
          <label className="label">Salary</label>
          <input
            className="input is-link"
            type="number"
            step={15000}
            placeholder="salary"
            {...register("salary")}
            // value={user.salary}
            // onChange={(e) => setUser({ ...user, salary: +e.target.value })}
          />
        </div>
        <button className="button is-link my-5"> Save</button>
      </form>
    </div>
  );
};

export default Page;
