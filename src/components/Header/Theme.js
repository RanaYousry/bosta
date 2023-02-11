import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#f30008",
    },
  },
  typography: {
    body1: {
      fontFamily: ["Cairo-Regular", "serif"].join(","),
      color: "#b3b8c4",
      fontSize: "16px",
    },
    button: {
      fontFamily: ["Cairo-bold", "serif"].join(","),
      color: "#b3b8c4",
      fontSize: "20px",
      fontWeight: 400,
      textTransform: "none",
    },
    fontFamily: ["Cairo-Regular", "serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
