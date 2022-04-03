import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "css"> {
  /**
   * ID of an input
   *
   * It is also used for id of label & error text. Should be unique within a page.
   */
  id: string;

  tag?: string;

  custom?: boolean;

  customText?: string;

  notAurl?: boolean;

  className?: string;

  name?: string;

  /**
   * Input type
   *
   * @example "email"
   *
   * @example "password"
   *
   * @default "text"
   */
  type?: string;

  label?: string;

  required?: boolean;

  /**
   * Error for the input.
   *
   * @example
   * <Input error="Invalid value." />
   *
   * @example
   * <Input error={<span>You should enter <b>valid</b> phone number.</span>}
   */
  error?: ReactNode;

  fullWidth?: boolean;
}
