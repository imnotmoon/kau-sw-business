import React from 'react';
import styled from 'styled-components';

// components
import ContentFrame from '../../components/ContentFrame';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

const OpenSource = () => {
  return (
    <ContentFrame title="오픈소스" state={1}>
      <Content>
        <Title text="Open Source 교육과정" />
        <Subtitle text="한국항공대학교 오픈소스 SW교육 목표 및 방향" />
        <img src="/img/major_education/3-1.png" alt="" />
        <br />
        <br />
        <Subtitle text="오픈소스SW 교육과정 및 프로젝트 추진계획" />
        <img src="/img/major_education/3-2.png" alt="" />
        <br />
        <br />
        <Subtitle text="오픈소스SW 교육을 주관하는 오픈소스SW센터 신설, 운영" />
        <img src="/img/major_education/3-3.png" alt="" />
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    padding-left: 20px;
  }
`;

export default OpenSource;
