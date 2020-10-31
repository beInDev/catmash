import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    h1: {
      fontSize: "4em",
      padding: "25px",
    },
    h2: {
      fontSize: "2em",
    },
  },
  palette: {
    primary: {
      // main: "#eee",
      main: "#000",
    },
    secondary: {
      main: "#e8c27b",
    },
    error: {
      main: red.A400,
    },
    background: {
      // default: "#242424",
      default: "#fff",
    },
  },
});

export default theme;
