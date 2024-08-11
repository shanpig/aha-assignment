import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { ValidateItemProps } from "./validate-item.type";

export default function ValidateItem({ isValid, children }: ValidateItemProps) {
  return (
    <div className="flex items-center gap-[10px] py-2">
      {isValid ? (
        <CheckCircleIcon sx={{ color: "primary.light" }} />
      ) : (
        <CheckCircleOutlinedIcon color="disabled" />
      )}
      <span className="text-sm tracking-[0.25px]">{children}</span>
    </div>
  );
}
