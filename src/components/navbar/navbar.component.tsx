import Link from 'next/link'
import { NavbarContainer, NavbarSection, NavbarLink } from './navbar.style'

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarSection>
        <Link href="/">
          <NavbarLink>Home</NavbarLink>
        </Link>
        <Link href="/collection">
          <NavbarLink>Collection</NavbarLink>
        </Link>
      </NavbarSection>
    </NavbarContainer>
  )
}
