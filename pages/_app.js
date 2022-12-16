import { ClerkProvider } from '@clerk/nextjs';
import Script from 'next/script';

import Layout from '../components/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Layout>
        <Script src='https://app.embed.im/snow.js' />
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}

export default MyApp;
