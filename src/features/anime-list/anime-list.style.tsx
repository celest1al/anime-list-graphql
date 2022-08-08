import styled from '@emotion/styled'

export const Container = styled.section`
  padding: 1.5rem;
`

export const ListContainer = styled.div`
  display: grid;
  gap: 4px;
  padding-bottom: 0.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
