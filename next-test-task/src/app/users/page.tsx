import { getAllUsers } from "../../../lib/api";

const page = () => {
  const result = getAllUsers();
  console.log(result);
  const currentDate = Date.now();
  return (
    <div>
      <h1 className="is-size-4">Users</h1>
      <div className="columns">
        {result.map((user) => {
          return (
            <div key={null} className="box">
              <h1>{user.name}</h1>
              <h2>{user.surname}</h2>
              <strong>
                {Math.floor((currentDate - user.createdDate) / 60000) !== 0
                  ? `${Math.floor(
                      (currentDate - user.createdDate) / 60000
                    )}  minutes ago`
                  : "Last seen recently"}
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
