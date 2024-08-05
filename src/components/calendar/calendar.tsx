"use client";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { StyledWrapper } from "./calendar.style";

export default function Calendar() {
  return (
    <StyledWrapper>
      <StaticDatePicker defaultValue={dayjs()} />
    </StyledWrapper>
  );
}
