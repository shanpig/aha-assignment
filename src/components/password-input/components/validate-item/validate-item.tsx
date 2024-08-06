import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { ValidateItemProps } from "./validate-item.type";

export default function ValidateItem({ isValid, children }: ValidateItemProps) {
  return (
    <div className="flex items-center gap-2 py-2">
      {isValid ? (
        <CheckCircleIcon sx={{ color: "primary.light" }} />
      ) : (
        <CheckCircleOutlinedIcon color="disabled" />
      )}
      <span>{children}</span>
    </div>
  );
}
