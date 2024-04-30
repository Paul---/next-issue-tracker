import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];
const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => {
          return (
            <li key="label">
              <Link
                href={href}
                className="text-zinc-800 hover:text-zinc-950 hover:font-extrabold transition-shadow"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
