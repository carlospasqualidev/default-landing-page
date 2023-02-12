import { IButton } from "./types";

export const Button = ({ children, ...rest }: IButton) => {
  return <button {...rest}>{children}</button>;
};
