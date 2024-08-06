import { TextFieldProps } from "@mui/material";

export type CustomTextFieldProps = Partial<TextFieldProps> & {
  type: string;
  value: string;
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
};
