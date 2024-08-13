import { getAllUsers } from "../../../lib/api";

const page = () => {
  const result = getAllUsers();
  console.log(result);
  return (
    <div>
      <h1 className="is-size-4">Users</h1>
      <div className="columns">
        {result.map((user) => {
          return (
            <div key={null} className="box m-5 is-two-fifths ">
              <h1> {user.name}</h1> 
              <h2> {user.surname}</h2>
              <strong> {user.nickname}</strong>
              <p className="has-text-danger">{user.count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
