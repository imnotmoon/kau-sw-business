import React from 'react'
import styled from '@emotion/styled'

import { LINKS } from './links'

const CATEGORIES = ['SW 전공교육', '산학협력', 'SW기초·융합교육', 'SW가치확산'];

interface IDropdown {
  type? : undefined | 'category';
  bigCategory? : string;
  onClick: (e: React.MouseEvent) => void;
}

const Dropdown = ({ bigCategory, onClick, type } : IDropdown) => {
  const items = 
    type ? CATEGORIES : !bigCategory ? Object.keys(LINKS) : Object.keys(LINKS[bigCategory]);

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
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid white;
  backdrop-filter: blur(10px);
  color: white;
  position: absolute;
  top: 40px;
  z-index: 999;

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
