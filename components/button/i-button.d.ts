import { ButtonHTMLAttributes } from "react";

export interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "css"> {
  variant: "primary";
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
}

export type IButtonEmotionProps = IButtonProps;
