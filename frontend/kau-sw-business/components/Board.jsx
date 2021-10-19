import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../styles/theme'
import NewsCard from './NewsCard'

function Board() {
  return (
    <Container>
      <Title>
        <span>KAU</span> HEADLINE
      </Title>
      <Section>
        <NewsCard title="공지사항" src="#"></NewsCard>
        <NewsCard title="사업단소식" src="#" ></NewsCard>
      </Section>
    </Container>
  )
}

const Container = styled.section`
	background-color: ${COLORS.BACKGROUND};
	position: relative;
	top: -125px;
	width: 100vw;
	height: 800px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.h1`
  & > span {
    color: ${COLORS.PRIMARY1};
  }
`

const Section = styled.section`
  display: flex;
  justify-content: space-around;
`

export default Board
