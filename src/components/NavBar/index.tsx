"use client";
import { styled } from "@mui/material";
import { FC } from "react";
import Row from "../common/Row";
import NavBarLeft from "./components/NavBarLeft";
import NavBarRight from "./components/NavBarRight";

const StyledRow = styled(Row)(({ theme }) => ({
  backgroundColor: theme.palette.bottomNav,
  padding: theme.spacing(16),
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "inherit",
    padding: theme.spacing(6),
  },
}));

const NavBar: FC = () => {
  return (
    <StyledRow>
      <NavBarLeft />

      <NavBarRight />
    </StyledRow>
  );
};

export default NavBar;
