import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function MyApp({
  Component,
  pageProps: { session, pageProps },
}: AppProps | any) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth adminOnly={Component.auth.adminOnly}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children, adminOnly }: any) {
  const router = useRouter();
  const { status, data: session }: any = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message=admin login required');
  }

  return children;
}

export default MyApp;
