"use client";

import { InputLabel, OutlinedInput } from "@mui/material";
import { Ubuntu } from "next/font/google";
import { useState } from "react";

import ValidateItem from "./components/validate-item/validate-item";
import { StyledFormControl } from "./password-input.style";
import validator from "./utils/validator";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export default function PasswordInput() {
  const [value, setValue] = useState("");

  const { hasLowerCase, hasNumber, hasSpecial, hasUpperCase, isLongerThan8 } =
    validator(value);

  return (
    <main className={ubuntu.className}>
      <StyledFormControl variant="outlined">
        <InputLabel shrink htmlFor="outlined-adornment-password">
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label="Password"
          value={value}
          notched
          type="password"
          placeholder="Password"
          onChange={(e) => setValue(e.target.value)}
        />
      </StyledFormControl>

      <div
        style={{ width: "335px" }}
        className="py-2 px-3 rounded-lg bg-grayScale mt-5 text-white text-sm"
      >
        <ValidateItem isValid={hasUpperCase}>
          Have at least one uppercase letter
        </ValidateItem>
        <ValidateItem isValid={hasLowerCase}>
          Have at least one lowercase letter
        </ValidateItem>
        <ValidateItem isValid={hasNumber}>
          Have at least one number
        </ValidateItem>
        <ValidateItem isValid={hasSpecial}>
          Have at least one special character (!@#$...etc)
        </ValidateItem>
        <ValidateItem isValid={isLongerThan8}>
          Longer than 8 characters
        </ValidateItem>
      </div>
    </main>
  );
}
