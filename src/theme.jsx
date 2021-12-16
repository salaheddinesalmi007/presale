import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0C0C0C",
      light: "#313439",
      contrastText: "#fff",
    },
    secondary: {
      main: "#06044a",
      light: "#4c02f1",
      contrastText: "#000000",
    },
    text: {
      primary: "#fff",
      secondary: "#35343f",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Roboto, Sans-serif",
        backgroundColor: "#fff",
        color: "#222",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;
