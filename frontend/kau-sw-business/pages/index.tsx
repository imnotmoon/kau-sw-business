import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';
import React, { useState, useEffect, useRef } from 'react';

// components
import SimpleSlider from '../components/Carousel';
import Board from '../components/Board';
import CalendarCards from '../components/CalendarCards';
import SitemapModal from '../components/SitemapModal';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IndexPage = () => {
  const [sitemapModalView, setSitemapModalView] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(modalRef);
    if (sitemapModalView) {
      modalRef.current.style.overflow = 'hidden';
      modalRef.current.style.maxHeight = '100vh';
    } else {
      modalRef.current.style.overflow = 'scroll';
      modalRef.current.style.maxHeight = '100%';
    }
  }, [sitemapModalView]);

  return (
    <div ref={modalRef}>
      <Layout modalHandler={setSitemapModalView}>
        <SimpleSlider style={{ height: '200px' }} />
        <News>
          <div>
            <h1>
              SW중심사업단 <span style={{ fontWeight: 700 }}>NEWS</span>
            </h1>
            <p>최근소식 및 공지사항을 안내해드립니다.</p>
          </div>
          <div>
            <Board></Board>
          </div>
        </News>
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f7f8fa' }}>
          <Cards>
            <CalendarCards imageUrl="/img/calendar_box1.png" title="SW 전공교육 연간캘린더" link="https://google.com" />
            <CalendarCards
              imageUrl="/img/calendar_box2.png"
              title="산학협력교육 연간캘린더"
              link="https://google.com"
            />
            <CalendarCards
              imageUrl="/img/calendar_box3.png"
              title="SW기초·융합교육 연간캘린더"
              link="https://google.com"
            />
            <CalendarCards imageUrl="/img/calendar_box4.png" title="SW 가치확산 연간캘린더" link="https://google.com" />
          </Cards>
        </div>
        {sitemapModalView && <SitemapModal modalHandler={setSitemapModalView} />}
      </Layout>
    </div>
  );
};

const News = styled.span`
  height: auto;
  background: #e7e7e7;
  display: flex;
  margin: 0;
  padding: 0 0 50px 0;
  flex-direction: column;
  align-items: center;

  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h1 {
      margin-top: 50px;
      font-weight: 400;
      & > span {
        font-weight: 500;
        color: #262f41;
      }
    }
    & > p {
      text-align: center;
      margin-top: 15px;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    justify-content: space-around;
    width: 1000px;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Cards = styled.div`
  padding-top: 30px;
  padding-bottom: 50px;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 340px);
  justify-content: center;
  gap: 30px;
`;

export default IndexPage;
