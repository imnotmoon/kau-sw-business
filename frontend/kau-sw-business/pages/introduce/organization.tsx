import React from 'react';
import ContentFrame from '../../components/ContentFrame';

// interface
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import styled from 'styled-components';
import ImageContent from '../../components/ImageContent';

// images
import img1 from '../../public/img/introduce/1-9.png';

const Organization = () => {
  return (
    <ContentFrame title="조직구성" state={0}>
      <Content>
        <Title text={'조직구성'} />
        <Subtitle text={'사업단 조직'} />
        <ImageContent src={img1} paddingLeft={20}></ImageContent>
      </Content>
    </ContentFrame>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Organization;
