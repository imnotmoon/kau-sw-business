import React from 'react';
import styled from 'styled-components';
import { DetailMenuProp } from '../interfaces/ComponentInterface';

// interface
const DetailMenu: React.FC<DetailMenuProp> = ({ isPhone }) => {
  return (
    <Container>{!isPhone ? <IsDesktopOrLaptop></IsDesktopOrLaptop> : <IsPhoneOrTablet></IsPhoneOrTablet>}</Container>
  );
};

export default DetailMenu;

//* css : styled-component
const Container = styled.div`
  display: flex;
`;

const IsDesktopOrLaptop = styled.div``;

const IsPhoneOrTablet = styled.div``;
