"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  name?: string;
  className?: string;
}

const NavLink = ({
  children,
  href,
  name = "has-background-success",
  className,
}: Props) => {
  const path = usePathname();
  if (path == href) {
    className += " " + name;
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
