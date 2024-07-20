// import { handleEditLecture } from "@/app/lib/actions/lecture-action";
import { handleEditLecture } from "@/app/lib/actions/lecture-action";
import { getLectureById } from "@/app/lib/api";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const page = ({ params }: Props) => {
  const lecture = getLectureById(params.id);
  console.log(lecture);
  lecture;
  return (
    <>
      <h1 className="is-size-4 mx-6">Edit lecture information</h1>
      <div className="columns mx-5 ">
        <div className="column is-half">
          <form
            className="box my-4 "
            action={handleEditLecture.bind(null, params.id)}
          >
            <input
              className="input is-primary is-normal my-4 "
              type="text"
              name="name"
              placeholder="Enter a name"
              defaultValue={lecture.name}
            />
            <input
              className="input is-primary is-normal my-4 "
              type="text"
              name="surname"
              placeholder="Enter a surname"
              defaultValue={lecture.surname}
            />
            <input
              className="input is-primary is-normal my-4 "
              type="text"
              name="salary"
              placeholder="Enter a salary"
              defaultValue={lecture.salary}
            />
            <button className=" button is-success">Edit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
