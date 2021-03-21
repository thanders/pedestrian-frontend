import '../styles/globals.css'
import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
// import all locales through barrel file
import * as locales from "../content/locale"
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from '../theme';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const localeCopy = locales[locale]
  const messages = localeCopy[pathname]

  return (
    <ThemeProvider theme={getTheme()}>
      <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
