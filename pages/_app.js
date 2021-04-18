import React, {useState, useEffect} from 'react';
import Router from "next/router";
import '../styles/globals.css';
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import all locales through barrel file
import * as locales from "../content/locale";
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#5f4339',
    padding: '50px',
    width: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    fontSize: '200%'
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <ThemeProvider theme={getTheme()}>
      <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
      >
        {loading ? (
          <div className={classes.root}>
            <div className={classes.loaderContainer}>
              <p><b>Loading</b></p>
              <CircularProgress color="secondary" />
            </div>
          </div>
        ) :
        <Component {...pageProps} />
      }
      </IntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
