import { handleAddLecture } from "@/app/lib/actions/lecture-action";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="is-size-4 mx-6">Add lectures</h1>
      <div className="columns mx-5 ">
        <div className="column is-half">
          <form className="box my-4 " action={handleAddLecture}>
            <input
              className="input is-primary is-normal my-4 "
              type="text"
              name="name"
              placeholder="Enter a name"
            />
            <input
              className="input is-primary is-normal my-4 "
              type="text"
              name="surname"
              placeholder="Enter a surname"
            />
            <input
              className="input is-primary is-normal my-4 "
              type="text"
              name="salary"
              placeholder="Enter a salary"
            />
            <button className=" button is-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
