import { addUser, getAllUsers } from "@/lib/api";
import { InputUser } from "@/lib/types";

export const POST = async (req: Request) => {
  const data = (await req.json()) as InputUser;
  const result = addUser(data);

  if (result.changes) {
    return Response.json({ status: "ok" });
  } else {
    return Response.json({ status: "error" });
  }
};

export const GET = (): Response => {
  const users = getAllUsers();
  return Response.json({ users });
};
