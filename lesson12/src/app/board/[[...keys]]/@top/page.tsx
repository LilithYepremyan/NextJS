import { getTopWriters } from "@/app/_lib/api";
import React from "react";

const Page = () => {
  const data = getTopWriters();
  return (
    <>
      <h1>Top</h1>
      <div className="writers">
        {data.map((wr) => (
          <div key={wr.id}>
            {wr.name} ,{wr.century}th century
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
