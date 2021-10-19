import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../styles/theme'

const NewsCard = ({ data }) => {
  const { title, state, startDate, endDate } = data;
  return (
    <Container>
      {title}
      {state}
      {startDate}
      {endDate}
    </Container>
  )
}

const Container = styled.div`
  width: 20vw;
  min-width: 250px;
  background-color: white;
  height: 200px;
`

export default NewsCard
