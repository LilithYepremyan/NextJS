// import { handleUpdate } from "@/app/lib/actions/course-action";
import { handleUpdate } from "@/app/lib/actions/course-action";
import { getCourseById } from "@/app/lib/api";
import ImagePicker from "@/app/lib/components/imagePicker";
import Image from "next/image";

interface IProps {
  params: { id: number };
}

export default function Page(props: IProps) {
  const result = getCourseById(props.params.id);
  console.log(result);
  return (
    <>
      <h1 className="is-size-4">Update Course</h1>
      <div className="columns">
        <div className="column is-two-fifths">
          <form className="box my-5" action={handleUpdate}>
            <div className="field my-4">
              <input
                type="text"
                name="name"
                placeholder="enter a name"
                className="input is-dark"
                defaultValue={result.name}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                name="price"
                placeholder="enter a price"
                className="input is-dark"
                defaultValue={result.price}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                name="duration"
                placeholder="enter a duration"
                className="input is-dark"
                defaultValue={result.duration}
              />
            </div>
            <div className="field my-4">
              <div className="box has-background-light">
                <Image
                  src={`/${result.cover}`}
                  width={150}
                  height={150}
                  alt="Course photo"
                />
              </div>
              <ImagePicker />
            </div>

            <div className="field my-4">
              <button className="button is-danger">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
