import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

// components
import Layout from './Layout';
import LeftBox from './LeftBox';

// interface
interface ContentFrameProp {
  title: string;
  state: number;
  children?: ReactNode;
}

const ContentFrame: React.FC<ContentFrameProp> = ({ title, state, children }) => {
  return (
    <Layout>
      <FrontImage>
        <span>사업단 소개</span>
      </FrontImage>
      <Container>
        <LeftBox title={title} state={state} />
        <div>
          <div>{title}</div>
        </div>
        {children}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  & > div:nth-of-type(2) {
    padding-left: 40px;
    padding-right: 40px;
    width: 55vw;
    min-width: 800px;
    & > div:nth-of-type(1) {
      border-bottom: 1px solid black;
      height: 70px;
      font-size: 24px;
      line-height: 80px;
    }
  }
`;

const FrontImage = styled.div`
  background: url(/img/banner.jpg);
  height: 454px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    color: white;
    font-size: 50px;
    font-weight: 300;
    letter-spacing: 7px;
  }
`;

export default ContentFrame;
