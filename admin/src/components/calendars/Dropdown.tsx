import React, { useState, useMemo } from 'react'
import styled from '@emotion/styled'

import { LINKS } from './links'

interface IDropdown {
  type: 'big' | 'small';
  bigCategory? : string;
  onClick: (e: React.MouseEvent) => void;
}

const Dropdown = ({ type, bigCategory, onClick } : IDropdown) => {
  const items = useMemo(
    () => !bigCategory ? Object.keys(LINKS) : Object.keys(LINKS[bigCategory]),
    [bigCategory]
  );

  return (
    <Container>
      {items.map((menuName) => {
        return <div onClick={onClick} key={menuName}>{menuName}</div>
      })}
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  color: white;
  position: absolute;
  top: 40px;

  & > div {
    height: 40px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    align-items: center;
    padding: 3px 8px;
    
    &:hover {
      color: white;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  & > div:last-of-type {
    border-bottom: none;
  }
`

export default Dropdown
