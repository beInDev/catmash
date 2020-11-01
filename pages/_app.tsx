import reducers from 'app/reducers';
import theme from 'app/assets/theme';
import { createStore } from 'redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import Head from 'next/head';
import Header from 'app/components/Layout/Header';
import Footer from 'app/components/Layout/Footer';
import Container from 'app/components/Layout/Container';
import { useEffect } from 'react';
import Main from 'app/components/Layout/Main';

const store = createStore(reducers);

function App({ Component, pageProps }: Record<string, any>): JSX.Element {
  // https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <title>CatMash</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container>
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
            <Footer />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
