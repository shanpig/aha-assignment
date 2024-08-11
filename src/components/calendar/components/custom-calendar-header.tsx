import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Stack, Typography } from "@mui/material";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers/PickersCalendarHeader";
import { Dayjs } from "dayjs";

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
    <div
      className={`flex justify-between pt-1 ${view === "year" ? "pb-[18px]" : "pb-2"} items-center`}
    >
      <Stack spacing={1} direction="row">
        <div
          className="p-3"
          onClick={selectPreviousMonth}
          title="Previous month"
        >
          <ChevronLeft />
        </div>
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
        <div className="p-3" onClick={selectNextMonth} title="Next month">
          <ChevronRight />
        </div>
      </Stack>
    </div>
  );
}
