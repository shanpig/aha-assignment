import { SxProps, Theme } from "@mui/material";

export const CalendarStyles: SxProps<Theme> = {
  width: "min-content",
  boxShadow: "4px 4px 20px 0px #0000004d",
  borderRadius: "9px",
  backgroundColor: "#1B1B1B",
  "&&& *": {
    fontFamily: "Inter"
  },
  ".MuiTypography-overline": {
    textTransform: "unset"
  },
  ".MuiPickersToolbar": {
    "&-root": {
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
    }
  },
  ".MuiDateCalendar-root": {
    height: "317px"
  },
  ".MuiPickersDay": {
    "&-root": { fontSize: "14px" },
    "&-today": { borderColor: "#00A3FF" },
    "&-dayOutsideMonth, .MuiDayCalendar-weekDayLabel": {
      color: "rgb(146, 146, 146)"
    }
  },
  ".MuiDayCalendar": {
    "&-weekDayLabel": {
      fontSize: "11px",
      lineHeight: "13px",
      height: "unset",
      margin: 0
    },
    "&-header": {
      marginBottom: "12px",
      columnGap: "6px"
    },
    "&-monthContainer .Mui-selected": {
      color: "white"
    },
    "&-weekContainer": {
      columnGap: "6px",
      margin: 0,
      "& > button": {
        margin: 0,
        "&:hover": {
          backgroundColor: "white",
          color: "#080808"
        }
      }
    }
  },
  ".MuiYearCalendar-root": {
    gap: "24px 8px",
    display: "grid",
    padding: "0 24px",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  ".MuiPickersYear": {
    "&-root": {
      flexBasis: "unset",
      "& > button": {
        borderRadius: "2px",
        lineHeight: "24px",
        height: "unset",
        width: "60px",
        margin: 0,
        "&.Mui-selected": {
          backgroundColor: "#00A3FF",
          color: "white"
        },
        "&:hover": {
          backgroundColor: "white",
          color: "#080808",
          borderRadius: 0
        }
      }
    }
  },
  ".MuiDialogActions-root": {
    padding: "0 28px 16px 0",
    marginTop: "-4px",
    "& > button": {
      textTransform: "unset",
      padding: "8px 16px",
      color: "white",
      minWidth: "unset",
      fontWeight: 600,
      "&:last-child": {
        marginLeft: "38px"
      }
    }
  }
};
