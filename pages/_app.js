import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicRoute = ['/', '/movie/[id]'].includes(pathname);
  return (
    <Layout>
      <Script src='https://app.embed.im/snow.js' />
      <ClerkProvider>
        {isPublicRoute && <Component {...pageProps} />}
        {!isPublicRoute && (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </ClerkProvider>
    </Layout>
  );
}

export default MyApp;
