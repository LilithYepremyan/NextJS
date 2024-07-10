import styles from "./page.module.css";
import { getAllUsers } from "./lib/api";
import User from "./lib/User";

export default async function Home() {
  const users = await getAllUsers();
  console.log(users);

  return (
    <main className={styles.main}>
      <h1>Hello </h1>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </main>
  );
}
