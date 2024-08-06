import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { StyledItem } from "./validate-item.style";
import { ValidateItemProps } from "./validate-item.type";

export default function ValidateItem({ isValid, children }: ValidateItemProps) {
  return (
    <StyledItem>
      {isValid ? (
        <CheckCircleIcon sx={{ color: "primary.light" }} />
      ) : (
        <CheckCircleOutlinedIcon color="disabled" />
      )}
      <span>{children}</span>
    </StyledItem>
  );
}
