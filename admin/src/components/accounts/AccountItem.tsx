import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Account } from '../../interfaces'
import NewAccount from './NewAccount'
import Confirm from '../Confirm'
import APIs from '../../utils/networking'

const AccountItem = ({ account } : { account : Account }) => {
  const [opened, setOpened] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onClickEdit = () => {
    setOpened(!opened);
  }

  const onClickRemove = () => {
    setConfirm(true);
  }

  return (
    <>
    <Container>
      <div>{account.name}</div>
      <div>{account.userId}</div>
      <button onClick={onClickEdit} >수정</button>
      <button onClick={onClickRemove} >삭제</button>
    </Container>
    {opened && <NewAccount edit={true} account={account}/>}
    {confirm && <Confirm idx={+account.id!} close={() => { setConfirm(false); }} API={APIs.putAccount} /> }
    </>
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
  padding: 10px 0;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  & button {
    width: 100px;
    height: 40px;
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

const EditMenu = styled.section`
  position: absolute;
  top: 70px;
  width: 100%;
`

export default AccountItem
