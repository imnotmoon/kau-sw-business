import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { Title } from '../notices/NewNoticeStyle'
import { Banner } from '../../interfaces'
import Confirm from '../Confirm'
import APIs from '../../utils/networking'
import { COLORS } from '../../utils/styled'
import EditBannerModal from './EditBannerModal'

const DeleteBanner = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [modal, setModal] = useState({ show: false, idx: -1 });
  const [edit, setEdit] = useState({ show: false, idx: -1 });

  useEffect(() => {
    APIs.getBannerSummary().then((res) => setBannerList(res));
  }, [modal])

  const onClickDeleteBanner = (idx: number) => {
    return (e: React.MouseEvent) => {
      setModal({ show: true, idx: idx });
    }
  }

  const onClickEditBanner = (idx: number) => {
    return (e: React.MouseEvent) => {
      setEdit({ show: true, idx: idx });
    }
  }

  const closeEditModal = () => {
    setEdit({ show: false, idx: -1 });
  }

  const closeDeleteModal = () => {
    setModal({ show: false, idx: -1 });
  }

  return (
    <>
      <Container>
        <Title>배너 수정/삭제</Title>
        <List>
          {bannerList.map((banner, idx) => 
            <BannerItem key={idx}>
              <span>{banner.title}</span>
              <span>{banner.content}</span>
              <button onClick={onClickEditBanner(idx)} style={{right: '120px'}}>수정</button>
              <button onClick={onClickDeleteBanner(idx)}>삭제</button>
              <img src={banner.imageUrl} alt={banner.title}/>
            </BannerItem>
          )}
        </List>
      </Container>
      {modal.show && <Confirm idx={modal.idx} close={closeDeleteModal} API={APIs.deleteBanner}/>}
      {edit.show && <EditBannerModal idx={edit.idx} close={closeEditModal} banner={bannerList[edit.idx]}/>}
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

  & > button {
    width: 80px;
    height: 40px;
    border: 1px solid white;
    color: white;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    position: absolute;
    bottom: 20px;
    right: 20px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${COLORS.LIGHTBLUE};
      transition: all 0.3s ease;
    }
  }
  
`

export default DeleteBanner
