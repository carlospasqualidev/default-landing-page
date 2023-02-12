"use client";

import Link from "next/link";
import { RedirectButton } from "../Buttons/RedirectButton";
import { MenuDropDown } from "../MenuDropDown/MenuDropDown";
import { data } from "./data";

export const NavBar = () => {
  return (
    <nav className="flex justify-between  items-center py-6 px-10  shadow-lg">
      <div className="lg:hidden">
        <MenuDropDown />
      </div>

      <div className="max-lg:hidden">
        <Link href="/home">Logo</Link>
      </div>

      <ul className="flex items-center gap-12 max-lg:hidden ">
        {data.map((data) => (
          <li
            key={data.href}
            className="hover:scale-125 transition-all duration-200"
          >
            <Link href={data.href}>{data.label}</Link>
          </li>
        ))}
      </ul>

      <div className="max-lg:hidden">
        <RedirectButton href="">Git Hub</RedirectButton>
      </div>
    </nav>
  );
};
