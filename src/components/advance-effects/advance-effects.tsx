"use client";

import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

import { CalendarStyles } from "../calendar/calendar.constants";
import calendarHeader from "../calendar/components/custom-calendar-header";
import textField from "../custom-text-field/custom-text-field";

export default function AdvanceEffects() {
  const [tempDate, setTempDate] = useState<Dayjs | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setDate(date);
    setOpen(false);
  };

  return (
    <DatePicker
      open={open}
      value={date}
      views={["year", "day"]}
      onClose={handleClose}
      onChange={(newDate) => setTempDate(newDate)}
      closeOnSelect={false}
      fixedWeekNumber={6}
      dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format("dd")}
      showDaysOutsideCurrentMonth
      localeText={{ toolbarTitle: "Text" }}
      slots={{ calendarHeader, textField }}
      slotProps={{
        textField: {
          value: date,
          label: "Birthday",
          placeholder: "mm/dd/yyyy",
          onClick: () => setOpen(true)
        },
        popper: {
          anchorEl: document.querySelector("#outlined-adornment-Birthday"),
          sx: { translate: "0 14px" }
        },
        mobilePaper: {
          sx: { backgroundColor: "unset" }
        },
        desktopPaper: {
          sx: { backgroundColor: "unset" }
        },
        day: {
          day: dayjs("2024/08/01"),
          today: true,
          selected: true
        },
        layout: {
          sx: CalendarStyles
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
          }
        },
        toolbar: {
          toolbarPlaceholder: dayjs().format("MMM, YYYY"),
          hidden: false,
          toolbarFormat: "MMM, YYYY"
        }
      }}
    />
  );
}
