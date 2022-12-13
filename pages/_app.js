import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Layout from '../components/Layout';

const frontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicRoute = ['/'].includes(pathname);
  return (
    <Layout>
      <ClerkProvider frontendApi={frontendApi}>
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
