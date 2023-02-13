import Link from "next/link";
import { IRedirectButton } from "./types";
import { FaGithub } from "react-icons/fa";

export const RedirectButton = ({ children, href, styles }: IRedirectButton) => {
  return (
    <a href={href}>
      <div
        style={{
          backgroundColor: styles.bgColor,
          color: styles.textColor,
          borderColor: styles.textColor,
        }}
        className="flex justify-center items-center gap-2 px-4 py-2 rounded-full border-2 hover:scale-105 ease-in transition-all duration-200"
      >
        <FaGithub size="1.5rem" />
        {children}
      </div>
    </a>
  );
};
