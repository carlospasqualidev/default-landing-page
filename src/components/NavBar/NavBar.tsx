"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RedirectButton } from "../Buttons/RedirectButton";
import { MenuDropDown } from "../MenuDropDown/MenuDropDown";
import { data } from "./data";

export const NavBar = () => {
  const [urlHash, setUrlHash] = useState("#");
  useEffect(() => {
    setUrlHash(window.location.hash);
  }, []);
  return (
    <nav className="w-full fixed flex justify-between items-center py-4 px-12 shadow-lg z-10 ease-in duration-300 bg-white">
      <div className="lg:hidden">
        <MenuDropDown />
      </div>

      <div className="max-lg:hidden">
        <a href="/">Logo</a>
      </div>

      <ul className="flex items-center gap-12 max-lg:hidden">
        {data.map((data) => (
          <li
            onClick={() => setUrlHash(data.href)}
            key={data.href}
            className={
              data.href === urlHash
                ? "scale-125 opacity-100 transition-all duration-200 ease-in "
                : "hover:scale-125 transition-all duration-200 ease-in opacity-75"
            }
          >
            <a href={data.href}>{data.label}</a>
          </li>
        ))}
      </ul>

      <div className="max-lg:hidden">
        <RedirectButton
          href="https://github.com/carlospasqualidev"
          Icon={FaGithub}
        />
      </div>
    </nav>
  );
};
