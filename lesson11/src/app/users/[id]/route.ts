export const PUT = async (
  req: Request,
  { params }: { params: { id: number } }
) => {
  const result = await req.json();
  return Response.json({
    result,
    params,
  });
};
