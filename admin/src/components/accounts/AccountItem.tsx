import React from 'react'
import styled from '@emotion/styled'

import { Account } from '../../interfaces'

const AccountItem = ({ account } : { account : Account }) => {
  return (
    <Container>
      <div>{account.name}</div>
      <div>{account.userId}</div>
      <button>수정</button>
      <button>삭제</button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid white;
  color: white;
  min-width: 850px;
  overflow-x: scroll;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  & button {
    width: 100px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(85, 129, 179, 0.8);
      transition: all 0.3s ease;
    }
  }
`

export default AccountItem
