import styled from '@emotion/styled';
import React from 'react';

const Menus = () => {
  return (
    <Container>
      {menuItems.map(({ menu, href }, idx) => {
        return (
          <div key={idx}>
            <a href={href}>{menu}</a>
          </div>
        );
      })}
      <div>{sessionStorage.getItem('username') || 'admin'}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 70px;

  & a {
    text-decoration: none;
    color: white;
  }
`;

const menuItems = [
  { menu: '공지관리', href: '' },
  { menu: '캘린더관리', href: '' },
  { menu: '계정관리', href: '' },
];

export default Menus;
