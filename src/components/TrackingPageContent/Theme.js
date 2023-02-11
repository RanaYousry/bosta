import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#f30008",
    },
  },
  typography: {
    h3: {
      fontFamily: ["Cairo-Regular", "serif"].join(","),
      color: "#3b404f",
      fontSize: "24px",
    },
    h4: {
      fontFamily: ["Cairo-Black", "serif"].join(","),
      color: "#3b404f",
      fontSize: "18px",
    },
    h5: {
      fontFamily: ["Cairo-Bold", "serif"].join(","),
      fontSize: "18px",
      color: "#b3b8c4",
    },
    h6: {
      fontFamily: ["Cairo-Regular", "serif"].join(","),
      color: "#3b404f",
      fontSize: "16px",
    },
    body1: {
      fontFamily: ["Cairo-Regular", "serif"].join(","),
      color: "#b3b8c4",
      fontSize: "16px",
    },
    body2: {
      fontFamily: ["Cairo-Black", "serif"].join(","),
      color: "#3b404f",
      fontSize: "14px",
    },
    subtitle1: {
      fontFamily: ["Cairo-Regular", "serif"].join(","),
      color: "#f30008",
      fontSize: "12px",
    },
    fontFamily: ["Cairo-Regular", "serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
