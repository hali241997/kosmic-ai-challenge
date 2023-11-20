"use client";
import { FC } from "react";
import { PageWrapperProps } from "./types";
import { styled } from "@mui/material";
import MuiBox from "../common/MuiBox";

const StyledBox = styled(MuiBox)(({ theme }) => ({
  padding: `${theme.spacing(15)} ${theme.spacing(16)}`,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6),
  },
}));

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default PageWrapper;
