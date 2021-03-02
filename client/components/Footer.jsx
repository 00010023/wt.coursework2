import React from "react";
import Link from "next/link";

const id = "00010023";
const Footer = (props) => (
  <div
    className={
      props.simple ? undefined : "bg-white border-t border-b border-gray-700"
    }
  >
    <div className="max-w-screen-xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div className="flex justify-center text-center">
        <a
          href="https://github.com/00010023/wt.coursework2/blob/main/license"
          className="hover:underline cursor-fuck"
        >
          GNU General Public License v3.0 | Copyright © 2021 00010023
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
