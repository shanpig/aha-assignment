import { styled } from "@mui/material";

export const StyledItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 8px;

  & > span {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.25px;
  }
`;
