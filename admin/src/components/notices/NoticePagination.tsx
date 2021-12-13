import React from 'react'
import styled from '@emotion/styled';

interface INoticePagenation {
  currentPage: number;
  length: number;
  setPage: (page: number) => void;
}

const NoticePagination = ({currentPage, length, setPage}: INoticePagenation) => {

  const onClickPageButton = (page: number) => {
    return () => {
      setPage(page);
    }
  }

  const [start, end] = [
    Math.floor((currentPage-1) / 10) * 10,
    length < 10 ? Math.ceil(length / 10) : Math.floor(currentPage / 10 * 10) + 10
  ]

  console.log(start, end);

  return (
    <Container>
      <Button>{'<'}</Button>
      {Array.from({length: end - start}).map((_, idx) => {
        return idx+1 === currentPage 
          ? <Page current={true} onClick={onClickPageButton(start+idx+1)} key={idx}>{start+idx+1}</Page> 
          : <Page current={false} onClick={onClickPageButton(start+idx+1)} key={idx}>{start+idx+1}</Page>
      })}
      <Button>{'>'}</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
`

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: rgba(200, 200, 200, 0.6);
  border: 1px solid white;
  color: rgba(20, 20, 20, 0.8);
  font-weight: 600;
  font-size: 17px;

  &:active {
    outline: none;
    background-color: rgba(255, 255, 255);
  }
`

const Page = styled(Button)<{current: boolean}>`
  
`

export default NoticePagination
