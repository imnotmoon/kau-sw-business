import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import { Banner } from '../../interfaces'
import Confirm from '../Confirm'
import APIs from '../../utils/networking'

const DeleteBanner = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [modal, setModal] = useState({ show: false, idx: -1 });
  console.log(bannerList)

  useEffect(() => {
    APIs.getBannerSummary().then((res) => setBannerList(res));
  }, [modal])

  const onClickBanner = (idx: number) => {
    return (e: React.MouseEvent) => {
      setModal({ show: true, idx: idx });
    }
  }

  const closeModal = () => {
    setModal({ show: false, idx: -1 });
  }

  return (
    <>
      <Container>
        <Title>배너 삭제</Title>
        <List>
          {bannerList.map((banner, idx) => 
            <BannerItem onClick={onClickBanner(idx)}>
              <span>{banner.title}</span>
              <span>{banner.content}</span>
              <img src={banner.imageUrl} alt={banner.title}/>
            </BannerItem>
          )}
        </List>
      </Container>
      {modal.show && <Confirm idx={modal.idx} close={closeModal} API={APIs.deleteBanner}/>}
    </>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const List = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`

const BannerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  margin-bottom: 30px;

  & > span {
    position: absolute;
  }

  & > span:nth-of-type(1) {
    font-size: 20px;
    top: 20px;
    left: 20px;
  }

  & > span:nth-of-type(2) {
    top: 70px;
    left: 20px;
  }

  & img {
    max-width: 100%;
  }
`

export default DeleteBanner
