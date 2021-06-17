import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { FocusEventHandler } from 'react';
import { MouseEventHandler } from 'react';

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
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1100 });
  const isPHoneOrTablet = useMediaQuery({ maxWidth: 1100 });

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
          {isDesktopOrLaptop &&
            menuItems.map((item, idx) => {
              return (
                <MenuItem key={idx} onMouseEnter={onMenuFocused}>
                  <Link href={menuLinks[idx]}>
                    <a>{item}</a>
                  </Link>
                </MenuItem>
              );
            })}
          {isPHoneOrTablet && (
            <Button>
              <img src="/img/menu_more.png" alt="" width={40} height={40} />
            </Button>
          )}
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
      cursor: pointer;
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

  &:active {
    filter: invert(70%);
  }
`;

export default Menu;
