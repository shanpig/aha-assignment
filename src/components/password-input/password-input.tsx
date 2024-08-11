"use client";

import { Ubuntu } from "next/font/google";
import { useState } from "react";

import CustomTextField from "../custom-text-field/custom-text-field";
import ValidateItem from "./components/validate-item/validate-item";
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
      <CustomTextField
        label="Password"
        type="password"
        placeholder="Password"
        value={value}
        setValue={setValue}
      />

      <div className="w-[335px] py-2 px-3 rounded-lg bg-grayScale mt-5 text-white text-sm">
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
