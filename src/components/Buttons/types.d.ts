import { ButtonHTMLAttributes } from "react";
import { LinkProps } from "next/link";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export interface IRedirectButton extends LinkProps {
  children: string;
  href: string;

  styles: {
    bgColor?: string;
    textColor?: string;
  };
}
