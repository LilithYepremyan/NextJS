"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  name?: string;
}

const NavLink = ({
  children,
  href,
  className,
  name = "has-background-light",
}: Props) => {
  const path = usePathname();

  if (path == href) {
    className += " " + name;
  }
  return (
    <div>
      <Link href={href} className={className}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
