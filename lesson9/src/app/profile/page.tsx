import React from "react";
import { verifyAuth } from "../lib/auth";
import { redirect } from "next/navigation";
import { getUserById } from "../lib/api";
import { handleLogout } from "../lib/actions";

const page = async () => {
  const result = await verifyAuth();
  if (!result.user) {
    redirect("/login");
  }

  const user = getUserById(result.user.id);
  return (
    <div className="p-5">
      <p className="is-size-3">
        {user.name} {user.surname}
      </p>
      <form action={handleLogout}>
        <button className="button is-danger">Log out</button>
      </form>
    </div>
  );
};

export default page;
