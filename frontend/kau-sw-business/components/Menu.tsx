import React, { MouseEventHandler, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { MenuItems } from '../utils/MenuInterface';

const Menu = () => {
  const detailMenuRef = useRef<HTMLDivElement>();
  const [isShown, setIsShown] = useState('사업단 소개');

  useEffect(() => {
    return () => {
      document.getElementById('detail-menu').style.visibility = 'hidden';
    };
  }, []);

  const onLogoClick = (e: React.MouseEvent) => {
    location.href = '/';
  };

  const onMenuFocused: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsShown(event.currentTarget.innerText.trim());
    if (detailMenuRef) {
      detailMenuRef.current.style.visibility = 'visible';
      detailMenuRef.current.style.height = '40px';
    }
  };

  const onMenuBlured: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (detailMenuRef) {
      detailMenuRef.current.style.visibility = 'hidden';
      detailMenuRef.current.style.height = '0px';
    }
  };

  const buildDetailMenu = (idx) => {
    if (MenuItems[idx].title === isShown) {
      console.log(MenuItems[idx].title, isShown);
      return (
        <div>
          {MenuItems[idx].subElements?.map((item, idx) => {
            return (
              <Link href={item.url} key={idx}>
                {item.title}
              </Link>
            );
          })}
        </div>
      );
    }
  };
  return (
    <>
      <Container>
        <div>
          <Image src="/img/logo_01.png" alt="logo" width="205" height="36" onClick={onLogoClick} />
          <div>
            {MenuItems.map((item, idx) => {
              return (
                <MenuItem key={idx} onMouseEnter={onMenuFocused}>
                  <Link href={MenuItems[idx].url}>
                    <a>{item.title}</a>
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
      <DetailMenu ref={detailMenuRef} onMouseLeave={onMenuBlured} id="detail-menu">
        {MenuItems.map((_, idx) => {
          let tmp = buildDetailMenu(idx);
          console.log(idx, tmp);
          return tmp;
        })}
      </DetailMenu>
    </>
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

const DetailMenu = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 110px;
  z-index: 900;
  // transition: all 0.1s ease;
  display: flex;
  width: 100vw;

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    & > a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default Menu;
