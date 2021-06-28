import React from 'react';
import styled from 'styled-components';

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
  justify-content: flex-start;
  align-items: center;

  & > div {
    margin-left: 10vw;
    color: white;
    font-weight: 400;
    font-size: 15px;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      padding-left: 30px;
      margin-right: 15px;
    }
  }

  & > div:nth-of-type(2) {
    border: 1px solid white;
    padding: 8px 20px 8px 20px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      min-width: 80px;
      font-size: 13px;
      margin-right: 30px;
    }
  }
`;

const NewLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
