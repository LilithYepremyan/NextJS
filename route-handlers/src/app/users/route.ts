import { addUser, deleteUserById, getAllUsers } from "@/lib/api";

export const POST = async (req: Request) => {
  const body = await req.json();
  const result = addUser(body);
  if (result.changes) {
    return Response.json({ status: "ok" });
  } else {
    return Response.json({ status: "error" });
  }
};

export const GET = async (req: Request) => {
  const result = getAllUsers();
  return Response.json(result);
};


