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

  const onLogoClick = (e: React.MouseEvent) => {
    location.href = '/';
  };

  const onMenuFocused: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsShown(event.currentTarget.innerText.trim());
    if (detailMenuRef) {
      detailMenuRef.current.style.visibility = 'visible';
      detailMenuRef.current.style.height = '200px';
    }
  };

  const onMenuBlured: MouseEventHandler<HTMLDivElement> = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (detailMenuRef) {
      setIsShown('');
      detailMenuRef.current.style.visibility = 'hidden';
      detailMenuRef.current.style.height = '0px';
    }
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
          {/* <Button>
            <img src="/img/menu_more.png" alt="" width={40} height={40} />
          </Button> */}
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

    & > div > div > img {
      @media screen and (max-width: 768px) {
        width: 150px;
        height: 30px;
      }
    }

    & > div:nth-of-type(2) {
      display: flex;
      gap: 70px;
      cursor: pointer;
      min-width: 700px;

      // @media screen and (max-width: 1100px) {
      //   display: none;
      // }
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
  top: 80px;
  z-index: 900;
  transition: all 0.1s ease;
  visibility: hidden;
  width: 100vw;

  &:hover {
    transition: all 0.1s ease;
  }

  & > div {
    transition: all 0.1s ease;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    & > div {
      display: flex;
      height: 100%;
      width: 160px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    & > div:nth-of-type(1) {
      width: 155px;
    }

    & > div:nth-of-type(2) {
      width: 140px;
    }

    & > div:nth-of-type(3) {
      width: 150px;
    }

    & > div:nth-of-type(4) {
      width: 175px;
    }

    & > div:nth-of-type(5) {
      margin-right: 8.5vw;
      @media screen and (max-width: 1600px) {
        margin-right: 8vw;
      }
      width: 145px;
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

export default Menu;
