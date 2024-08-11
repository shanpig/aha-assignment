"use client";

import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

import CustomCalendarHeader from "../calendar/components/custom-calendar-header";
import CustomTextField from "../custom-text-field/custom-text-field";

export default function AdvanceEffects() {
  const [tempDate, setTempDate] = useState<Dayjs | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <DatePicker
      open={open}
      value={date}
      onClose={() => {
        setDate(date);
        setOpen(false);
      }}
      onChange={(newDate) => setTempDate(newDate)}
      closeOnSelect={false}
      views={["year", "day"]}
      dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format("dd")}
      showDaysOutsideCurrentMonth
      fixedWeekNumber={6}
      localeText={{
        toolbarTitle: "Text"
      }}
      slots={{
        calendarHeader: CustomCalendarHeader,
        textField: CustomTextField
      }}
      sx={{
        "&&& *": {
          fontFamily: "Inter"
        }
      }}
      slotProps={{
        textField: {
          value: date,
          label: "Birthday",
          placeholder: "mm/dd/yyyy",
          onClick: () => setOpen(true)
        },
        popper: {
          anchorEl: document.querySelector("#outlined-adornment-Birthday"),
          sx: {
            translate: "0 14px"
          }
        },
        mobilePaper: {
          sx: { borderRadius: "9px" }
        },
        desktopPaper: {
          sx: { borderRadius: "9px" }
        },
        day: {
          day: dayjs("2024/08/01"),
          today: true,
          selected: true
        },
        layout: {
          sx: {
            width: "min-content",
            borderRadius: "9px",
            backgroundColor: "#1B1B1B",
            boxShadow: "4px 4px 20px 0px #0000004d",
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
          }
        },
        actionBar: {
          hidden: false,
          actions: ["cancel", "accept"],
          onAccept: () => {
            setDate(tempDate);
            setOpen(false);
          },
          onCancel: () => {
            setTempDate(null);
          },
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
          toolbarPlaceholder: dayjs().format("MMM, YYYY"),
          hidden: false,
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
    />
  );
}
