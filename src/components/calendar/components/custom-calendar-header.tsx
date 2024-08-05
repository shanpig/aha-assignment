import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Stack, Typography } from "@mui/material";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import { Dayjs } from "dayjs";

import {
  StyledCalendarHeaderRoot,
  StyledIconButton
} from "./custom-calendar-header.style";

export default function CustomCalendarHeader(
  props: PickersCalendarHeaderProps<Dayjs>
) {
  const { view, currentMonth, onMonthChange, onViewChange } = props;

  const selectNextMonth = () =>
    onMonthChange(currentMonth.add(1, "month"), "left");
  const selectPreviousMonth = () =>
    onMonthChange(currentMonth.subtract(1, "month"), "right");

  const selectYearView = () => onViewChange?.("year");

  return (
    <StyledCalendarHeaderRoot
      sx={
        view === "year"
          ? {
              paddingBottom: "18px"
            }
          : {}
      }
    >
      <Stack spacing={1} direction="row">
        <StyledIconButton onClick={selectPreviousMonth} title="Previous month">
          <ChevronLeft />
        </StyledIconButton>
      </Stack>
      <Typography
        variant="body1"
        onClick={selectYearView}
        className="cursor-pointer"
      >
        {view === "year"
          ? currentMonth.format("YYYY")
          : currentMonth.format("MMMM YYYY")}
      </Typography>
      <Stack spacing={1} direction="row">
        <StyledIconButton onClick={selectNextMonth} title="Next month">
          <ChevronRight />
        </StyledIconButton>
      </Stack>
    </StyledCalendarHeaderRoot>
  );
}
