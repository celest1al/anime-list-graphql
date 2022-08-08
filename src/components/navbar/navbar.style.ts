import styled from '@emotion/styled'

export const NavbarContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
`

export const NavbarSection = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #000;
  color: #fff;
`

export const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
`
