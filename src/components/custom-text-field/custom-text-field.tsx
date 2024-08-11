import { TextField } from "@mui/material";

import { CustomTextFieldProps } from "./custom-text-field.type";

export default function CustomTextField({
  label,
  type,
  placeholder,
  value,
  setValue,
  ...props
}: CustomTextFieldProps) {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={{
        width: "335px",
        ":hover label:not(.Mui-focused)": {
          color: "white"
        },
        ".MuiOutlinedInput-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline":
          {
            borderWidth: "3px",
            borderColor: type === "password" ? "#00A3FF" : "white"
          },
        fieldset: {
          borderRadius: "8px",
          transition: "border-color 0.2s",
          border: "3px solid rgba(255, 255, 255, 50%)",
          ":hover": {
            borderColor: "white"
          }
        }
      }}
      label={label}
      InputLabelProps={{
        shrink: true,
        htmlFor: `outlined-adornment-${label}`,
        sx: {
          fontFamily: "Ubuntu",
          translate: "2px 0",
          letterSpacing: "0.4px",
          "&:active": {
            textTransform: "none"
          },
          "&.Mui-focused": {
            color: "white"
          }
        }
      }}
      InputProps={{
        id: `outlined-adornment-${label}`,
        notched: true,
        type: type,
        label: label,
        value: value,
        placeholder: placeholder,
        onChange: (e) => setValue(e.target.value)
      }}
    />
  );
}
