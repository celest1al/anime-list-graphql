import styled from '@emotion/styled'

export const AnimeCollectionContainer = styled.div`
  display: grid;
  gap: 6px;
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

export const AnimeCollectionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`

export const ButtonContainer = styled.div`
  padding-top: 0.5rem;
`

export const CreateButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
