import { notFound } from "next/navigation";

interface IProps {
  params: { id: number };
}

const Page = (props: IProps) => {
  if (props.params.id > 10) {
    notFound();
  }
  return <p className="is-size-2">Hello Book No.{props.params.id}</p>;
};

export default Page;
