import App, { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';

function WrappedApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle>
        <Component {...pageProps}></Component>
      </GlobalStyle>
    </>
  );
}

export default WrappedApp;
