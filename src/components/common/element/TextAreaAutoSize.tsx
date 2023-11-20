import { styled, TextareaAutosize as BaseTextareaAutosize } from "@mui/material";
import { grey, amber } from "@mui/material/colors";


export const TextareaAutosize = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  margin-top: 12px;
  border-radius: 8px;
  color: ${grey[900]};
  background: #fff;
  border: 1px solid ${grey[500]};
  box-shadow: 0px 2px 2px ${grey[50]};
  resize:none;

  &:hover {
    border: 2px solid ${grey[900]};
  }

  &:focus {
    border-color: ${amber[500]};
    box-shadow: 0 0 0 2px ${amber[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);