"use client";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import CustomCalendarHeader from "./components/custom-calendar-header";

export default function Calendar() {
  return (
    <StaticDatePicker
      sx={{
        width: "min-content",
        boxShadow: "4px 4px 20px 0px #0000004d",
        borderRadius: "9px",
        "&&& *": {
          fontFamily: "Inter"
        },
        ".MuiTypography-overline": {
          textTransform: "unset"
        },
        ".MuiDateCalendar-root": {
          height: "317px"
        },
        ".MuiPickersDay-dayOutsideMonth, .MuiDayCalendar-weekDayLabel": {
          color: "rgb(146, 146, 146)"
        },
        ".MuiDayCalendar-weekDayLabel": {
          fontSize: "11px",
          lineHeight: "13px",
          height: "unset",
          margin: 0
        },
        ".MuiDayCalendar-header": {
          marginBottom: "12px",
          columnGap: "6px"
        },
        ".MuiPickersDay-today": {
          borderColor: "#00A3FF"
        },
        ".MuiDayCalendar-monthContainer .Mui-selected": {
          color: "white"
        },
        ".MuiDayCalendar-weekContainer": {
          columnGap: "6px",
          margin: 0
        },
        ".MuiDayCalendar-weekContainer > button": {
          margin: 0
        },
        ".MuiDayCalendar-weekContainer > button:hover": {
          backgroundColor: "white",
          color: "#080808"
        },
        ".MuiYearCalendar-root": {
          display: "grid",
          padding: "0 24px",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px 8px"
        },
        ".MuiPickersYear-root": {
          flexBasis: "unset"
        }
      }}
      localeText={{
        toolbarTitle: "Text"
      }}
      slotProps={{
        layout: {
          sx: { backgroundColor: "#1B1B1B" }
        },
        actionBar: {
          sx: {
            padding: "0 28px 16px 0",
            marginTop: "-4px",
            "& > button": {
              textTransform: "unset",
              padding: "8px 16px",
              color: "white",
              minWidth: "unset",
              fontWeight: 600
            },
            "& > button:last-child": {
              marginLeft: "38px"
            }
          }
        },
        toolbar: {
          sx: {
            gap: "4px",
            paddingBottom: "10px",
            "& > .MuiTypography-overline": {
              fontSize: "16px",
              lineHeight: "24px",
              color: "white"
            },
            "& > .MuiPickersToolbar-content > h4": {
              fontSize: "32px",
              lineHeight: "44px",
              fontWeight: 700
            }
          },
          toolbarFormat: "MMM, YYYY"
        },
        yearButton: {
          sx: {
            borderRadius: "2px",
            lineHeight: "24px",
            height: "unset",
            width: "60px",
            margin: 0,
            "&.Mui-selected": {
              backgroundColor: "#00A3FF",
              color: "white"
            },
            "&&&:hover": {
              backgroundColor: "white",
              color: "#080808",
              borderRadius: 0
            }
          }
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
