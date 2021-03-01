import Link from "next/link";
import React from "react";

const Header = () => (
  <header className="sticky top-0 bg-white flex items-center justify-start w-full h-12 border-b">
    <div className="flex items-center justify-center">
      <Link href="/">
        <a className="px-6 font-bold pb-2 hover:text-blue-600">&larr;</a>
      </Link>
    </div>
  </header>
);

export default Header;
