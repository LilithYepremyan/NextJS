import Link from "next/link";
import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <nav>
          <Link href="/contacts">Contacts</Link>
          <Link href="/help">Help</Link>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default layout;
