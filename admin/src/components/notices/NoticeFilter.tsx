import React from 'react'
import styled from '@emotion/styled'

interface Filter {
  filters: { category: string, pin: boolean },
  set: React.Dispatch<{ category: string, pin: boolean }>,
}

const NoticeFilter = ({ filters, set } : Filter) => {

  const onClickCategoryItem = (e: React.MouseEvent) => {
    const clicked = (e.target as HTMLDivElement).innerText.trim();
    set({...filters, category: clicked});
  }

  const onClickPinItem = (e: React.MouseEvent) => {
    const clicked = (e.target as HTMLDivElement).innerText.trim();
    set({...filters, pin: clicked === '고정' });
  }

  return (
    <Container>
      <div>
        <span>카테고리</span>|
        <CheckBox>
          <div onClick={onClickCategoryItem} style={{
            borderBottom: filters.category === 'notice' ? '1px solid white' : ''
          }}>notice</div>
          <div onClick={onClickCategoryItem} style={{
            borderBottom: filters.category === 'news' ? '1px solid white' : ''
          }}>news</div>
        </CheckBox>
      </div>
      <div>
        <span>고정여부</span>|
        <CheckBox>
          <div onClick={onClickPinItem} style={{
            borderBottom: filters.pin ? '1px solid white' : ''
          }}>고정</div>
          <div onClick={onClickPinItem} style={{
            borderBottom: !filters.pin ? '1px solid white' : ''
          }}>고정안함</div>
        </CheckBox>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 90%;
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  & > div {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
`

const CheckBox = styled.div`
  display: flex;
  width: 80%;
  gap: 50px;
  margin-bottom: 20px;

  & > div {
    cursor: pointer;
  }
`

export default NoticeFilter
