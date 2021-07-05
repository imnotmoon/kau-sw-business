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
      document.getElementById('detail-menu').style.height = '0px';
    };
  }, []);

  const onLogoClick = () => {
    location.href = '/';
  };

  const onMenuFocused: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsShown(event.currentTarget.innerText.trim());
    if (detailMenuRef) {
      detailMenuRef.current.style.visibility = 'visible';
      detailMenuRef.current.style.height = '200px';
    }
  };

  const onMenuBlured: MouseEventHandler<HTMLDivElement> = () => {
    detailMenuRef.current.style.visibility = 'hidden';
    detailMenuRef.current.style.height = '0px';
  };

  const buildDetailMenu = () => {
    return (
      <div>
        {MenuItems.map((item, idx) => {
          return (
            <div key={idx} style={MenuItems[idx].title === isShown ? { background: 'rgba(0,0,0,0.4)' } : {}}>
              {item.subElements.map((e, i) => {
                return (
                  <div key={i}>
                    <Link href={e.url}>{e.title}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Container>
        <div>
          <Image src="/img/logo_01.png" alt="logo" width="205" height="36" onClick={onLogoClick} />
          <MenuEntry>
            {MenuItems.map((item, idx) => {
              return (
                <MenuItem key={idx} onMouseEnter={onMenuFocused}>
                  <Link href={MenuItems[idx].url}>
                    <a>{item.title}</a>
                  </Link>
                </MenuItem>
              );
            })}
          </MenuEntry>
          <Button>
            <Image
              src="/img/menu_more.png"
              alt=""
              width="40"
              height="40"
              id="detail-menu"
              onMouseLeave={onMenuBlured}
            />
          </Button>
        </div>
      </Container>
      <DetailMenu ref={detailMenuRef} onMouseLeave={onMenuBlured} id="detail-menu">
        {buildDetailMenu()}
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

    @media screen and (max-width: 1000px) {
      width: 90vw;
    }

    & > div > div > img {
      @media screen and (max-width: 1000px) {
        width: 170px;
        height: 30px;
      }
    }
  }
`;

const MenuEntry = styled.div`
  display: grid;
  grid-template-columns: repeat(${MenuItems.length}, 150px);
  width: 70%;
  height: 100%;
  justify-items: center;
  justify-content: end;

  & > div {
    width: 100%;

    &:hover {
      padding-top: 24px;
      border-top: 3px solid white;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  text-align: center;
  padding-top: 27px;
  & > a {
    color: white;
    text-decoration: none;

    &:active {
      color: #e2e2e2;
    }
  }
`;

const DetailMenu = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 80px;
  transition: all 0.1s ease;
  visibility: hidden;
  width: 100vw;

  &:hover {
    transition: all 0.1s ease;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(${MenuItems.length}, 150px);
    height: 200px;
    justify-content: end;
    margin-right: 10vw;

    & > div {
      display: grid;
      height: 100%;
      width: ${80 * 0.7}vw;
      width: 150px;
      align-items: center;
    }

    & > div > div {
      padding-top: 7px;
      margin-bottom: 7px;
      display: flex;
      justify-content: center;
      text-align: center;

      &: hover {
        & > a {
          color: white;
        }
      }

      & > a {
        text-decoration: none;
        color: #aaa;
      }
    }
  }
`;

const Button = styled.div`
  color: white;
  padding: 12px 5px 5px 5px;
  filter: invert(100%);

  @media screen and (min-width: 1000px) {
    display: none;
  }

  &:active {
    filter: invert(70%);
  }
`;

export default Menu;
