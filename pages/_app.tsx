import reducers from "app/reducers";
import theme from "app/assets/theme";
import { createStore } from "redux";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";

const store = createStore(reducers);

function App({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
