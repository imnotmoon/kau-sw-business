import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../styles/theme'
import HeadlineCard from './HeadlineCard'
import { boardElements } from '../utils/sample-data'
import NewsCard from './NewsCard'

function Board() {
  return (
    <Container>
      <Title>
        <span>KAU</span> HEADLINE
      </Title>
      <Section>
        <HeadlineCard title="공지사항" src="#"></HeadlineCard>
        <HeadlineCard title="사업단소식" src="#" ></HeadlineCard>
      </Section>
      <Title>
        SW중심사업단 <span>NEWS</span>
      </Title>
      <Section>
        {boardElements.map((data, idx) => <NewsCard key={idx} data={data}/>)}
      </Section>
    </Container>
  )
}

const Container = styled.section`
	background-color: ${COLORS.BACKGROUND};
	position: relative;
	top: -130px;
	width: 100vw;
	height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.h1`
  margin-top: 50px;
  font-weight: 400;
  font-size: 30px;

  & > span {
    color: ${COLORS.PRIMARY1};
    font-weight: 500;
  }
`

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`

export default Board
