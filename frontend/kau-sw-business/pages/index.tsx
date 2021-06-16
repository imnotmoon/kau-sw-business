import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';

// components
import SimpleSlider from '../components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IndexPage = () => (
  <>
    <Layout>
      <SimpleSlider style={{ height: '200px' }} />
      <News>
        <div>
          <h1>
            SW중심사업단 <span>NEWS</span>
          </h1>
          <p>최근소식 및 공지사항을 안내해드립니다.</p>
          <div></div>
        </div>
      </News>
    </Layout>
  </>
);

const News = styled.div`
  height: 50vh;
  background: #e7e7e7;
  display: flex;
  margin: 0;
  padding: 0;
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
`;

export default IndexPage;
