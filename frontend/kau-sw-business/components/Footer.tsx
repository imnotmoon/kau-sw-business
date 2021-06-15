import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function Footer() {
  return (
    <Container>
      <hr />
      <InfoZone>
        <div>
          {'(10540) 경기도 고양시 덕양구 항공대학로 76'}
          <br />
          {'TEL - (02) 300-0114  FAX - (02) 3158-5769 E-mail - webmaster@kau.ac.kr'}
          <br />
          <br />
          {'COPYRIGHT 2012 Korea Aerospace University. All right reserved.'}
        </div>
        <div>교내주요사이트</div>
      </InfoZone>
      <NewLink></NewLink>
    </Container>
  );
}

const Container = styled.div`
  height: 157px;
  background: #1e1e1e;
`;

const InfoZone = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    color: white;
    font-weight: 400;
    font-size: 15px;
  }

  & > div:nth-of-type(2) {
    border: 1px solid white;
    padding: 8px 20px 8px 20px;
    cursor: pointer;
  }
`;

const NewLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
