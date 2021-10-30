import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

const Menus = () => {
  const history = useHistory();
  const [logout, setLogout] = useState(false);

  const onMouseEnterProfile = (e: React.MouseEvent) => {
    setLogout(true);
    (e.target as HTMLDivElement).style.color = 'red';
  };

  const onMouseLeaveProfile = (e: React.MouseEvent) => {
    setLogout(false);
    (e.target as HTMLDivElement).style.color = 'white';
  };

  const onClickProfile = () => {
    sessionStorage.clear();
    history.push('/login');
  };

  return (
    <Container>
      {menuItems.map(({ menu, href }, idx) => {
        return (
          <div key={idx}>
            <a href={href}>{menu}</a>
          </div>
        );
      })}
      <div onMouseEnter={onMouseEnterProfile} onMouseLeave={onMouseLeaveProfile} onClick={onClickProfile}>
        {logout ? '로그아웃' : sessionStorage.getItem('username') || 'admin'}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  & > div {
    width: 150px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid white;
    }
  }

  & a {
    text-decoration: none;
    color: white;
    font-weight: 400;
  }
`;

const menuItems = [
  { menu: '공지관리', href: '/' },
  { menu: '배너관리', href: '/'},
  { menu: '캘린더관리', href: '/' },
  { menu: '계정관리', href: '/' },
];

export default Menus;
