import React from "react";

interface Props {
  top: React.ReactNode;
  filter: React.ReactNode;
}

const Layout = ({ filter, top }: Props) => {
  return (
    <>
      <h1>Layout</h1>
      {filter}
      {top}
    </>
  );
};

export default Layout;
