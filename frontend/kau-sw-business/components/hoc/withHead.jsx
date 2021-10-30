import React from 'react';
import Head from 'next/head';

import Menu from '../Menu';
import Footer from '../Footer';

const withHead = (Component, description) => {
  const C = (props) => {
    return (
      <>
        <Head>
          <title>한국항공대학교 SW중심사업단</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Menu />
        <Component {...props} />
        <Footer></Footer>
      </>
    );
  };
  return C;
};

export default withHead;
