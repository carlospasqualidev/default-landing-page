"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { data } from "../NavBar/data";

export const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div
        onClick={() => {
          toggleMenu();
        }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {isOpen && (
        <menu
          className="mt-8 absolute w-4/5 border rounded-xl shadow-lg bg-white"
          id="menu"
        >
          <ul className="flex-col items-center p-6" id="menu">
            {data.map((data) => (
              <li
                id="menu"
                key={data.href}
                className="hover:scale-125 transition-all duration-200 flex justify-center text-2xl"
              >
                <Link href={data.href}>{data.label}</Link>
              </li>
            ))}
          </ul>
        </menu>
      )}
    </>
  );
};
