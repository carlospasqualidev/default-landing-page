import Link from "next/link";
import { IRedirectButton } from "./types";
import { FaGithub } from "react-icons/fa";

export const RedirectButton = ({ href, Icon }: IRedirectButton) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <div className="flex justify-center items-center p-1 hover:scale-125 ease-in transition-all duration-200">
        {<Icon size={24} />}
      </div>
    </a>
  );
};
