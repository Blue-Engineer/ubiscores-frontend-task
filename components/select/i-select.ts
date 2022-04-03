import { Props as SelectProps } from "react-select";

export interface ISelectInput extends SelectProps {
  label?: string;
  tag?: string;
  error?: string;
  required?: boolean;
}
