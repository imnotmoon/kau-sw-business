import React from 'react';
import styled from 'styled-components';

import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import ImageContent from '../../components/ImageContent';

import img1 from '../../public/img/major_education/3-1.png';
import img2 from '../../public/img/major_education/3-2.png';
import img3 from '../../public/img/major_education/3-3.png';
import withHead from '../../components/hoc/withHead';

const OpenSource = () => {
  return (
    <ContentFrame title="오픈소스" state={1}>
      <Content>
        <Title text="Open Source 교육과정" />
        <Subtitle text="한국항공대학교 오픈소스 SW교육 목표 및 방향" />
        <ImageContent src={img1} paddingLeft={20}></ImageContent>
        <br />
        <br />
        <Subtitle text="오픈소스SW 교육과정 및 프로젝트 추진계획" />
        <ImageContent src={img2} paddingLeft={20}></ImageContent>
        <br />
        <br />
        <Subtitle text="오픈소스SW 교육을 주관하는 오픈소스SW센터 신설, 운영" />
        <ImageContent src={img3} paddingLeft={20}></ImageContent>
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default withHead(OpenSource, '');
