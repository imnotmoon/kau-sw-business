import React from 'react'
import styled from '@emotion/styled'
import { NoticeDetail } from '../../interfaces'
import NewNotice from './NewNotice'

const EditNotice = ({ content } : { content: NoticeDetail}) => {
  return (
    <Container>
      <NewNotice content={content} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  overflow: scroll;
  height: 50vh;
  animation: open 0.3s ease;
  
  @keyframes open {
    0% {
      height: 0px;
    }

    100% {
      height: 50vh;
    }
  }
`

export default EditNotice
