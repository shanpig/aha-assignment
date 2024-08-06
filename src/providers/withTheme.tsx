import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { Inter, Ubuntu } from "next/font/google";
import { FunctionComponent } from "react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ["latin"] });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00A3FF",
      light: "#00D1FF"
    }
  },
  typography: {
    fontFamily: "Inter"
  }
});

export const customPalette = {
  disabled: theme.palette.augmentColor({
    color: {
      main: "#565656"
    },
    name: "disabled"
  }),
  default: theme.palette.augmentColor({
    color: {
      main: "rgba(255, 255, 255, 50%)"
    },
    name: "default"
  })
} as const;

theme = createTheme(theme, {
  palette: customPalette
});

const withTheme = (Component: FunctionComponent) => (
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
);

export default withTheme;
