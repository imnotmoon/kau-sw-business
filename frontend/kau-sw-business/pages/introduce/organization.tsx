import React from 'react';
import ContentFrame from '../../components/ContentFrame';

// interface
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import styled from 'styled-components';

const Organization = () => {
  return (
    <ContentFrame title="조직구성" state={0}>
      <Content>
        <Title text={'조직구성'} />
        <Subtitle text={'사업단 조직'} />
        <img src="/img/introduce/1-9.png" alt="SW중심대학사업 지원조직 체계" />
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

export default Organization;
