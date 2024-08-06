import { FormControl, InputLabel, styled } from "@mui/material";

export const StyledInputLabel = styled(InputLabel)`
  font-family: Ubuntu;
  translate: 2px 0;
  letter-spacing: 0.4px;

  &.Mui-focused {
    color: white;
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 335px;

  :hover label:not(.Mui-focused) {
    color: white;
  }

  .MuiOutlinedInput-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
    border-width: 3px;
  }

  fieldset {
    border-radius: 8px;
    transition: border-color 0.2s;
    ${({ theme }) => `border: 3px solid ${theme.palette.default.main}`};

    :hover {
      border-color: white;
    }
  }
`;
