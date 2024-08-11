"use client";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { CalendarStyles } from "./calendar.constants";
import CustomCalendarHeader from "./components/custom-calendar-header";

export default function Calendar() {
  return (
    <StaticDatePicker
      sx={CalendarStyles}
      localeText={{
        toolbarTitle: "Text"
      }}
      slotProps={{
        toolbar: {
          toolbarFormat: "MMM, YYYY"
        }
      }}
      slots={{
        calendarHeader: CustomCalendarHeader
      }}
      views={["year", "day"]}
      dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format("dd")}
      defaultValue={dayjs()}
      showDaysOutsideCurrentMonth
      fixedWeekNumber={6}
    />
  );
}
