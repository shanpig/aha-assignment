"use client";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { CalendarStyles } from "./calendar.constants";
import calendarHeader from "./components/custom-calendar-header";

export default function Calendar() {
  return (
    <StaticDatePicker
      sx={CalendarStyles}
      slots={{ calendarHeader }}
      views={["year", "day"]}
      localeText={{ toolbarTitle: "Text" }}
      defaultValue={dayjs()}
      fixedWeekNumber={6}
      showDaysOutsideCurrentMonth
      dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format("dd")}
      slotProps={{
        toolbar: {
          toolbarFormat: "MMM, YYYY"
        }
      }}
    />
  );
}
