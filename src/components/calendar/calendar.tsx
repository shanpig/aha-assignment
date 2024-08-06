"use client";

import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { StyledWrapper } from "./calendar.style";
import CustomCalendarHeader from "./components/custom-calendar-header";

export default function Calendar() {
  return (
    <StyledWrapper>
      <StaticDatePicker
        sx={{
          borderRadius: "9px",
          ".MuiDateCalendar-root": {
            height: "317px"
          },
          ".MuiPickersDay-dayOutsideMonth, .MuiDayCalendar-weekDayLabel": {
            color: "rgb(146, 146, 146)"
          },
          ".MuiDayCalendar-weekDayLabel": {
            fontSize: "11px",
            lineHeight: "13px",
            height: "unset"
          },
          ".MuiDayCalendar-header": {
            marginBottom: "12px"
          },
          ".MuiPickersDay-today": {
            borderColor: "#00A3FF"
          },
          ".MuiDayCalendar-monthContainer .Mui-selected": {
            color: "white"
          },
          ".MuiDayCalendar-weekContainer > button:hover": {
            backgroundColor: "white",
            color: "#080808"
          }
        }}
        localeText={{
          toolbarTitle: "Text"
        }}
        slotProps={{
          actionBar: {
            sx: {
              paddingRight: "28px",
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
