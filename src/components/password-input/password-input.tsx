"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

import { StyledFormControl } from "./password-input.style";
import validator from "./utils/validator";

export default function PasswordInput() {
  const [value, setValue] = useState("");

  const { hasLowerCase, hasNumber, hasSpecial, hasUpperCase, isLongerThan8 } =
    validator(value);

  return (
    <>
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
        <div className="flex items-center gap-2 py-2">
          {hasUpperCase ? (
            <CheckCircleIcon sx={{ color: "primary.light" }} />
          ) : (
            <CheckCircleOutlinedIcon color="disabled" />
          )}

          <span>Have at least one uppercase letter</span>
        </div>
        <div className="flex items-center gap-2 py-2">
          {hasLowerCase ? (
            <CheckCircleIcon sx={{ color: "primary.light" }} />
          ) : (
            <CheckCircleOutlinedIcon color="disabled" />
          )}
          <span>Have at least one lowercase letter</span>
        </div>
        <div className="flex items-center gap-2 py-2">
          {hasNumber ? (
            <CheckCircleIcon sx={{ color: "primary.light" }} />
          ) : (
            <CheckCircleOutlinedIcon color="disabled" />
          )}
          <span>Have at least one number</span>
        </div>
        <div className="flex items-center gap-2 py-2">
          {hasSpecial ? (
            <CheckCircleIcon sx={{ color: "primary.light" }} />
          ) : (
            <CheckCircleOutlinedIcon color="disabled" />
          )}
          <span>Have at least one special character (!@#$...etc)</span>
        </div>
        <div className="flex items-center gap-2 py-2">
          {isLongerThan8 ? (
            <CheckCircleIcon sx={{ color: "primary.light" }} />
          ) : (
            <CheckCircleOutlinedIcon color="disabled" />
          )}
          <span>Longer than 8 characters</span>
        </div>
      </div>
    </>
  );
}
