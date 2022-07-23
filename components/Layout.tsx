import React from 'react';
import Head from 'next/head';
import { childNode } from 'lib/interface/interface';
import Navbar from './Navbar';
import Header from './Header';

interface Props {
  title: string;
  children: childNode;
}

const Layout: React.FC<Props> = ({ title, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Foodie in UK' : 'Foodie in UK'}</title>
        <meta name="description" content="Foodie in UK for HongKongers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
