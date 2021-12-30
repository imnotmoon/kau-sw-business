import React from 'react'
import styled from '@emotion/styled'
import { NoticeDetail } from '../../interfaces'
import NewNotice from './NewNotice'

const EditNotice = ({ content } : { content: NoticeDetail}) => {
  return (
    <Container>
      <NewNotice content={content} editing={true} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow: scroll;
  height: 50vh;
`

export default EditNotice
