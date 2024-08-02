import { getCenturies } from "@/app/_lib/api";
import Link from "next/link";
import React from "react";

interface Props {
  params: { keys: string[] };
}

const Page = ({ params }: Props) => {
  console.log(params);


  const centuries = getCenturies();
  return (
    <div>
      {centuries.map((cen) => (
        <Link href={"/board/" + cen.century} key={cen.century}>
          Century: {cen.century}
        </Link>
      ))}
    </div>
  );
};

export default Page;
