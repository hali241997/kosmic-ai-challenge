"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { theme } from "./theme";
import { AppThemeProps } from "./types";

const AppTheme: FC<AppThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
