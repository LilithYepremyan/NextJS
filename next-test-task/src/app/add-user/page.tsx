import { handleAdd } from "../../../lib/actions/user-actions";

const page = () => {
  return (
    <>
      <h1 className="is-size-4">Add User</h1>
      <div className="columns">
        <div className="column is-two-fifths">
          <form action={handleAdd} className="box my-5">
            <div className="field my-4">
              {" "}
              <input
                type="text"
                name="name"
                placeholder="Enter a name"
                className="input"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                name="surname"
                placeholder="Enter a surname"
                className="input"
              />
            </div>
            <div>
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
