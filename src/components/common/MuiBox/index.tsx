"use client";
import { Box, styled } from "@mui/material";
import { FC } from "react";
import { MuiBoxProps } from "./types";

const StyledBox = styled(Box)({
  backgroundColor: "transparent",
});

const MuiBox: FC<MuiBoxProps> = (props) => {
  return <StyledBox {...props} />;
};

export default MuiBox;
