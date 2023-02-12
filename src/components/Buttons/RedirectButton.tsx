import Link from "next/link";
import { IRedirectButton } from "./types";
import { FaGithub } from "react-icons/fa";

export const RedirectButton = ({ children, href }: IRedirectButton) => {
  return (
    <Link href={href} className="hover:text-white">
      <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-full border-black border-2 bg-white hover:bg-black transition-all duration-200">
        <FaGithub size="1.5rem" />
        {children}
      </div>
    </Link>
  );
};
