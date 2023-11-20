import { Theme, createTheme, outlinedInputClasses } from "@mui/material";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface Palette {
    bottomNav: CSSProperties["color"];
    dividerColor: CSSProperties["color"];
    iconBg: CSSProperties["color"];
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    bottomNav?: CSSProperties["color"];
    dividerColor?: CSSProperties["color"];
    iconBg?: CSSProperties["color"];
    tertiary?: PaletteOptions["primary"];
  }
}

export const theme: Theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 745,
      lg: 1440,
      xl: 1728,
    },
  },
  palette: {
    background: {
      default: "#12111A",
    },
    text: {
      primary: "#fff",
    },
    mode: "dark",
    bottomNav: "#09090D",
    dividerColor: "#3A3940",
    iconBg: "rgba(58, 57, 64, 0.30)",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#D0CFD1",
    },
    tertiary: {
      main: "#FF7DFF",
    },
  },
  spacing: (space: number) => `${2 * space}px`,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#3A3940",
          opacity: 0.4,
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            backgroundColor: "#523FD7",
            "&:hover": {
              backgroundColor: "#523FD7",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          paddingLeft: 28,
          paddingRight: 28,
          paddingTop: 14,
          paddingBottom: 14,
        },
        label: {
          padding: 0,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          maxWidth: 516,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "white",
          backgroundColor: "rgba(58, 57, 64, 0.50)",
        },
        root: {
          borderRadius: 12,
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#523FD7",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#523FD7",
          },
        },
      },
    },
  },
});
