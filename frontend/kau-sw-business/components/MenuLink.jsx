import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { MenuItems } from '../utils/MenuInterface'

const MenuLink = ({ idx, item, selectedMenu, onFocusSignleMenu }) => {
  return (
    <Container key={idx} onMouseEnter={onFocusSignleMenu}>
      <Link href={MenuItems[idx].url}>
        <a style={{ color: selectedMenu === item.title ? "white" : "#e2e2e2" }}>
          {item.title}
        </a>
      </Link>
    </Container>
  )
}

const Container = styled.div`
	white-space: nowrap;
	align-self: center;
`;

export default MenuLink
