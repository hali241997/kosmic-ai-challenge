import { styled } from "@mui/material";
import { FC } from "react";
import MuiBox from "../MuiBox";
import { ColProps } from "./types";

const StyledRow = styled(MuiBox)({
  display: "flex",
  flexDirection: "column",
});

const Col: FC<ColProps> = (props) => {
  return <StyledRow {...props} />;
};

export default Col;
