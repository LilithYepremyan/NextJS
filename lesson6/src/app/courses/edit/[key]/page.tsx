import { handleUpdate } from "@/app/lib/actions/course-actions";
import { getCourseById } from "@/app/lib/api";
import { ImagePicker } from "@/app/lib/components/image-picker";
import Image from "next/image";
import React from "react";

interface IProps {
  params: { key: number };
}

const MyPage = ({ params }: IProps) => {
  const course = getCourseById(params.key);
  return (
    <>
      <p className="is-size-3">Edit course N {params.key}</p>
      <div className="columns">
        <div className="column  is-two-fifths my-4">
          <form className="box" action={handleUpdate.bind(null, params.key)}>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="name"
                placeholder="enter a name"
                defaultValue={course.name}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="price"
                placeholder="enter a price"
                defaultValue={course.price}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-primary"
                name="duration"
                placeholder="enter a duration"
                defaultValue={course.duration}
              />
            </div>
            <div className="field my-4">
              <Image
                src={"/" + course.cover}
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <div className="field my-4">
              <ImagePicker />
            </div>
            <div className="field my-4">
              <button className="button is-danger">submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyPage;
