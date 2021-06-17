import React from 'react';
import styled from 'styled-components';

// interface
interface DetailMenuProp {
  screen: any;
}

const DetailMenuItems = [];

const DetailMenu: React.FC<DetailMenuProp> = ({ screen }) => {
  return <Container></Container>;
};

export default DetailMenu;

//* css : styled-component
const Container = styled.div`
  display: flex;
`;
