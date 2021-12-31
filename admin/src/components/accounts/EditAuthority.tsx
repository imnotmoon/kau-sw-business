import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import { Account } from '../../interfaces'
import APIs from '../../utils/networking'
import AccountItem from './AccountItem'

const EditAuthority = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    APIs.getAllAccounts().then((res) => setAccounts(res.data));
  });

  return (
    <Container>
      <Title>계정 수정/삭제</Title>
      <div>
        {accounts.map((account) => <AccountItem account={account} key={account.id} />)}
      </div>
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

export default EditAuthority
