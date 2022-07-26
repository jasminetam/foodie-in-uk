import React from 'react';
import Head from 'next/head';
import { childNode } from 'lib/interface/interface';
import Navbar from './Navbar';
import Header from './Header';
import styled from 'styled-components';

interface Props {
  title: string;
  children: childNode;
}
const Main = styled.main`
  margin-top: 32px;
  margin: auto;
`;

const Footer = styled.footer`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Layout: React.FC<Props> = ({ title, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Foodie in UK' : 'Foodie in UK'}</title>
        <meta name="description" content="Foodie in UK for HongKongers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
        <Navbar />
      </header>
      <Main>{children}</Main>
      <Footer>
        <p>Copyright © 2022 Foodie in UK</p>
      </Footer>
    </>
  );
};

export default Layout;
