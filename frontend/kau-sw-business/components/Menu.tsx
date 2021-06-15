import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const menuItems = ['사업단 소개', 'SW전공교육', '산학협력교육', 'SW기초·융합교육', 'SW가치확산', '커뮤니티'];

const Menu = () => {
  return (
    <Container>
      <div>
        <Image src="/img/logo_01.png" alt="logo" width="205" height="36" />
        <div>
          {menuItems.map((item, idx) => {
            return (
              <MenuItem key={idx}>
                <Link href="/">
                  <a>{item}</a>
                </Link>
              </MenuItem>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #262f41;
  display: flex;
  justify-content: center;

  & > div {
    width: 80vw;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      display: flex;
      gap: 2vh;
    }
  }
`;

const MenuItem = styled.div`
  & > a {
    color: white;
    text-decoration: none;
  }
`;

export default Menu;
