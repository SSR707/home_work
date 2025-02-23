import { createTheme } from "@mui/material";
import { COLORS } from "./conlor";

export const theme = () =>
  createTheme({
    palette: {
      primary: {
        main: COLORS.primary,
      },
      error: {
        main: COLORS.danger,
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 992,
        xl: 1323,
      },
    },
    typography: {
      fontFamily: ["Ubuntu", "serif"].join(","),
      h2: {
        fontFamily: "Montserrat",
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: "130%",
        color: COLORS.titleColor,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "140%",
            padding: "13px 38px",
            borderRadius: "10px",
          },
        },
        variants: [
          {
            props: { variant: "contained" },
          },
        ],
      },
    },
  });
