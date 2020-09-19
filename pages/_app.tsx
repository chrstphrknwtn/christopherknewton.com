import { AppProps } from 'next/app';
import useProgress from '../components/progress';

import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  useProgress();
  return <Component {...pageProps} />;
}

export default App;
