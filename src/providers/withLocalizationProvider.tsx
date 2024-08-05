import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FunctionComponent } from "react";

const withLocalizationProvider = (Component: FunctionComponent) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Component />
    </LocalizationProvider>
  );
};

export default withLocalizationProvider;
