import React, { useState, useMemo } from 'react'
import styled from '@emotion/styled'

import { LINKS } from './links'

interface IDropdown {
  type: 'big' | 'small';
  bigCategory? : string;
}

const Dropdown = ({ type, bigCategory } : IDropdown) => {
  const items = useMemo(
    () => !bigCategory ? Object.keys(LINKS) : Object.keys(LINKS[bigCategory]),
    [bigCategory]
  );

  return (
    <Container>
      {items.map((menuName) => {
        return <div>{menuName}</div>
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
  position: relative;
  top: 30px;

  & > div {
    height: 30px;
    border-bottom: 1px solid lightgrey;
  }

  & > div:last-of-type {
    border-bottom: none;
  }
`

export default Dropdown
