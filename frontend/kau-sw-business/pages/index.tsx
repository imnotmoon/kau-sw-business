import styled from 'styled-components';
import Layout from '../components/Layout';
import React, { useState, useEffect, useRef } from 'react';

// components
// import SimpleSlider from '../components/Carousel';
import NewsCards from '../components/NewsCards';
import ImageContext from '../components/ImageContext';
import Board from '../components/Board';
// import CalendarCards from '../components/CalendarCards';
import SitemapModal from '../components/SitemapModal';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

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
        {/* <SimpleSlider style={{ height: '200px' }} /> */}
        <ImageContext title="Air Mobility 산업을 선도할 AI‧SW 인재 양성"></ImageContext>
        <News>
          <div>
            <h1>
              <span>KAU</span> HEADLINE
            </h1>
            <div>
              <NewsCards title="공지사항" type="공지사항"></NewsCards>
              <NewsCards title="사업단소식" type="사업단소식"></NewsCards>
            </div>
          </div>
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
        {/* <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f7f8fa' }}>
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
        </div> */}
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
    justify-content: space-around;
    align-items: center;

    & > h1 {
      margin-top: 30px;
      font-weight: 500;
      color: #262f41;

      & > span {
        font-weight: 400;
        color: black;
      }
    }

    & > div {
      display: flex;
      justify-contnet: center;
    }
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h1 {
      margin-top: 30px;
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

  & > div:nth-of-type(3) {
    display: flex;
    justify-content: space-around;
    width: 1000px;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// const Cards = styled.div`
//   padding-top: 30px;
//   padding-bottom: 50px;
//   width: 1000px;
//   display: grid;
//   grid-template-columns: repeat(2, 340px);
//   justify-content: center;
//   gap: 30px;
// `;

export default IndexPage;
