import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { LayoutProps } from '../interfaces/ComponentInterface';

// components
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{'한국항공대학교 SW중심사업단'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
          @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap);
        </style>
      </Head>
      {/* <Header>
        <nav>
          <Link href="/">
            <a>로그인</a>
          </Link>
          <span>{'|'}</span>
          <Link href="/">
            <a onClick={onSitemapButtonClick}>사이트맵</a>
          </Link>
        </nav>
      </Header> */}
      <Menu></Menu>
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
`;

// const Header = styled.div`
//   background: #252525;
//   display: flex;
//   justify-content: center;
//   height: 30px;

//   & > nav {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     width: 80vw;

//     & > a {
//       display: block;
//       color: #cdcdcd;
//       text-decoration: none;
//       font-size: 13px;
//     }

//     & > span {
//       color: #cdcdcd;
//       padding: 0 10px 0 10px;
//     }
//   }
// `;

export default Layout;
