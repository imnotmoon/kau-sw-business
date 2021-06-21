import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const menuItems = ['사업단 소개', 'SW전공교육', '산학협력교육', 'SW기초·융합교육', 'SW가치확산', '커뮤니티'];
const menuLinks = [
  '/introduce',
  '/major_education',
  '/industried_education',
  '/basic_education',
  '/sw_value',
  '/community',
];

const Menu = () => {
  const onLogoClick = (e: React.MouseEvent) => {
    location.href = '/';
  };

  const onMenuFocused: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('hover : ', event.currentTarget);
  };

  return (
    <Container>
      <div>
        <Image src="/img/logo_01.png" alt="logo" width="205" height="36" onClick={onLogoClick} />
        <div>
          {menuItems.map((item, idx) => {
            return (
              <MenuItem key={idx} onMouseEnter={onMenuFocused}>
                <Link href={menuLinks[idx]}>
                  <a>{item}</a>
                </Link>
              </MenuItem>
            );
          })}
        </div>
        <Button>
          <img src="/img/menu_more.png" alt="" width={40} height={40} />
        </Button>
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

    & > div > div > img {
      @media screen and (max-width: 768px) {
        width: 150px;
        height: 30px;
      }
    }

    & > div:nth-of-type(2) {
      display: flex;
      gap: 2vh;
      cursor: pointer;

      @media screen and (max-width: 1100px) {
        display: none;
      }
    }
  }
`;

const MenuItem = styled.div`
  & > a {
    color: white;
    text-decoration: none;

    &:active {
      color: #e2e2e2;
    }
  }
`;

const Button = styled.div`
  color: white;
  padding: 12px 12px 5px 12px;
  filter: invert(100%);

  @media screen and (min-width: 1100px) {
    display: none;
  }

  &:active {
    filter: invert(70%);
  }
`;

export default Menu;
