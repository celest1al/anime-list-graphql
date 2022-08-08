import styled from '@emotion/styled'

interface IPaginationNumberProps {
  active?: boolean
  isCurrentPage?: boolean
}

export const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-top: 0.25rem;
  font-size: 0.875rem;
`

export const PaginationNumber = styled.li<IPaginationNumberProps>`
  padding: 2px 12px;
  height: 32px;
  text-align: center;
  min-width: 32px;
  margin: auto 2px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  color: ${(props) => (props?.isCurrentPage ? '#fff' : '#000')};
  background: ${(props) => props?.isCurrentPage ? '#1C3879' : '#fff'};
  transition: background-color 0.2s ease-in-out;
`

export const PaginationDots = styled(PaginationNumber)`
  cursor: default;
`

export const PaginationArrow = styled(PaginationNumber)<IPaginationNumberProps>`
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
`
