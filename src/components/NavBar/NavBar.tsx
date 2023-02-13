"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RedirectButton } from "../Buttons/RedirectButton";
import { MenuDropDown } from "../MenuDropDown/MenuDropDown";
import { data } from "./data";

export const NavBar = () => {
  const [NavBarStyles, setNavBarStyles] = useState({
    bgColor: "transparent",
    textColor: "white",
  });

  const changeNavBarColor = () => {
    if (window.scrollY >= 90) {
      setNavBarStyles({
        bgColor: "white",
        textColor: "black",
      });
    } else {
      setNavBarStyles({
        bgColor: "transparent",
        textColor: "white",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBarColor);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: NavBarStyles.bgColor,
        color: NavBarStyles.textColor,
      }}
      className="w-full fixed flex justify-between items-center py-6 px-10 shadow-lg z-10 ease-in duration-300"
    >
      <div className="lg:hidden">
        <MenuDropDown />
      </div>

      <div className="max-lg:hidden">
        <a href="/">Logo</a>
      </div>

      <ul className="flex items-center gap-12 max-lg:hidden ">
        {data.map((data) => (
          <li
            key={data.href}
            className="hover:scale-125 transition-all duration-200 ease-in"
          >
            <a href={data.href}>{data.label}</a>
          </li>
        ))}
      </ul>

      <div className="max-lg:hidden">
        <RedirectButton
          href=""
          styles={{
            bgColor: NavBarStyles.bgColor,
            textColor: NavBarStyles.textColor,
          }}
        >
          Git Hub
        </RedirectButton>
      </div>
    </nav>
  );
};
