"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];
const NavBar = () => {
  const currentPath = usePathname();

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
                className={classnames({
                  "text-zinc-400": href === currentPath,
                  "text-zinc-800": href !== currentPath,
                  "hover:text-zinc-950 hover:font-extrabold transition-shadow":
                    true,
                })}
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
