import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import ImageContent from '../../components/ImageContent';

// images
import img1 from '../../public/img/major_education/2-1.png';
import img2 from '../../public/img/major_education/2-2.png';
import img3 from '../../public/img/major_education/2-6.png';
const Introduce = () => {
  return (
    <ContentFrame title="소개" state={1}>
      <Content>
        <Title text="SW전공교육 소개"></Title>
        <br></br>
        <Subtitle text="인재상과 교육목표"></Subtitle>
        <ImageContent src={img1} alt="한국항공대학교 SW중심대학 인재상과 교육목표" paddingLeft={20}></ImageContent>
        <br></br>
        <Subtitle text="모듈형 전공교육과정"></Subtitle>
        <ImageContent src={img2} alt="소프트웨어학과의 모듈형 전공교육과정" paddingLeft={20}></ImageContent>
        <br></br>
        <Subtitle text="AI·SW 중심의 전공 역량 강화"></Subtitle>
        <ImageContent src={img3} alt="AI·SW 중심의 전공 역량 강화" paddingLeft={20}></ImageContent>
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Introduce;
