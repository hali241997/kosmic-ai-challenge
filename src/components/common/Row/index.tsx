import { styled } from "@mui/material";
import { FC } from "react";
import MuiBox from "../MuiBox";
import { RowProps } from "./types";

const StyledRow = styled(MuiBox)({
  display: "flex",
});

const Row: FC<RowProps> = (props) => {
  return <StyledRow {...props} />;
};

export default Row;
