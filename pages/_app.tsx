import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "assets/theme";

function App({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
