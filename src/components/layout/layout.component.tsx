import { LayoutContainer } from './layout.style'
import { Navbar } from '../navbar/navbar.component'

interface ILayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}
