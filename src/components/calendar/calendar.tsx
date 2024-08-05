"use client";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { StyledWrapper } from "./calendar.style";
import CustomCalendarHeader from "./components/custom-calendar-header";

export default function Calendar() {
  return (
    <StyledWrapper>
      <StaticDatePicker
        localeText={{
          toolbarTitle: "Text"
        }}
        slotProps={{
          actionBar: {
            sx: {
              "& > button": {
                textTransform: "unset",
                color: "white"
              }
            }
          },
          toolbar: {
            toolbarFormat: "MMM, YYYY"
          }
        }}
        slots={{
          calendarHeader: CustomCalendarHeader
        }}
        dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format("dd")}
        defaultValue={dayjs()}
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
      />
    </StyledWrapper>
  );
}
