import { deleteUserById, updateUserById } from "./../../../lib/api";
import { getUserById } from "@/lib/api";
import { Props } from "./details/page";

export const PUT = async (req: Request, { params: { id } }: Props) => {
  const body = await req.json();
  const userUpdated = updateUserById(id, body);

  console.log(body, userUpdated);
  return Response.json({
    ...body,
    id,
  });
};

export const DELETE = async (req: Request, { params: { id } }: Props) => {
  const result = deleteUserById(id);
  console.log("delete !!!!");

  return Response.json({});
};

export const GET = async (req: Request, { params: { id } }: Props) => {
  const result = getUserById(id);
  return Response.json(result);
};
