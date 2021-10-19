import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../styles/theme'

import { notiData, newsData } from '../utils/sample-data'
import NewsCardItem from './NewsCardItem'

const NewsCard = ({ title, src }) => {
  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <a href={src}>more...</a>
      </div>
      {notiData.map((item, idx) => <NewsCardItem key={idx} {...item} />)}
    </Container>
  )
}

const Container = styled.div`
  width: 25vw;
  min-width: 300px;
  padding: 10px 20px 30px 20px;
  color: ${COLORS.TITLE};

  border: 1px solid ${COLORS.CARD_BORDER};
`

export default NewsCard
