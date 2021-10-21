import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../styles/theme'

const DATA = {
  address : '(10540) 경기도 고양시 덕양구 항공대학로 76',
  tel : 'TEL - (02) 300-0114',
  fax : 'FAX - (02) 3158-5769',
  email : 'E-mail - webmaster@kau.ac.kr',
  right : 'COPYRIGHT 2012 Korea Aerospace University. All right reserved.'
}

const Footer = () => {
  return (
    <Container>
      <div>
        <div>{DATA.address}</div>
        <div>
          <div>{DATA.tel}</div>
          <div>{DATA.fax}</div>
          <div>{DATA.email}</div>
        </div>
      </div>
      <div>
        <div>{DATA.right}</div>
      </div>
    </Container>
  )
}

const Container = styled.footer`
  position: absolute;
  width: 100vw;
  height: 200px;
  background-color: ${COLORS.PRIMARY1};
  z-index: 200;
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  gap: 30px;

  & > div {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction : column;
    color: ${COLORS.TEXT};
    & > div {
      white-space: nowrap
    }
  }

  & > div:nth-of-type(1) {
    justify-content: space-between;
  }

  & > div:nth-of-type(2) {
    justify-content : flex-end;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`

export default Footer
