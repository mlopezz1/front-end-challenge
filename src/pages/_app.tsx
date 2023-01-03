import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import Root from '$/containers/Views/Root';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Root>
  );
}
