import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import { Account } from '../../interfaces'
import APIs from '../../utils/networking'
import AccountItem from './AccountItem'

const EditAccount = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    APIs.getAllAccounts().then((res) => setAccounts(res.data));
  });

  return (
    <Container>
      <Title>계정 수정/삭제</Title>
      <AccountList>
        {accounts.map((account) => <AccountItem account={account} key={account.id} />)}
      </AccountList>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 90%;
  }
`

const AccountList = styled.div`
  height: calc(100vh - 250px);
  overflow-y: scroll;
`

export default EditAccount
