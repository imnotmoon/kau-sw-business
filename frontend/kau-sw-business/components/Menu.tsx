import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import MediaQuery, { useMediaQuery } from 'react-responsive';

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
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const isPHoneOrTablet = useMediaQuery({ maxWidth: 1000 });

  const onLogoClick = (e: React.MouseEvent) => {
    location.href = '/';
  };

  return (
    <Container>
      <div>
        <Image src="/img/logo_01.png" alt="logo" width="205" height="36" onClick={onLogoClick} />
        <div>
          {isDesktopOrLaptop &&
            menuItems.map((item, idx) => {
              return (
                <MenuItem key={idx}>
                  <Link href={menuLinks[idx]}>
                    <a>{item}</a>
                  </Link>
                </MenuItem>
              );
            })}
          {isPHoneOrTablet && <Button>더보기</Button>}
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
  }
`;

const Button = styled.div`
  color: white;
  padding: 8px 12px 8px 12px;
  border: 1px solid white;
  border-radius: 5px;
`;

export default Menu;
