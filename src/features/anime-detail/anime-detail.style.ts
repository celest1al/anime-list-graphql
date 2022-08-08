import styled from '@emotion/styled'

export const AnimeDetailContainer = styled.section`
  color: #334155;
  padding-bottom: 1rem;
`

export const AnimeDetailContent = styled.article`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const AnimeCoverImageContainer = styled.div`
  width: 50%;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 0px) and (max-width: 1023px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const AnimeCoverImage = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const InfoCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #334155;
  margin-bottom: 16px;
`

export const AnimeDescription = styled(InfoCard)`
  font-size: 0.75rem;
`

export const AnimeInfo = styled(InfoCard)`
  display: grid;
  gap: 8px;
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

export const AddedButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0.5rem;
  width: 100%;

  & > * + * {
    margin-top: 0.5rem;
  }
`

export const CollectionLink = styled.a`
  color: #0096FF;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`
