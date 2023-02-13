import { ButtonHTMLAttributes } from "react";
import { LinkProps } from "next/link";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export interface IRedirectButton extends LinkProps {
  href: string;
  Icon: any;
}
