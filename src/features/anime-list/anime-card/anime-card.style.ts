import styled from '@emotion/styled'

export const CardContainer = styled.div`
  max-width: 400px;
  max-height: 500px;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid darkslateblue;
  cursor: pointer;
`

export const ImageContainer = styled.picture`
  width: 100%;
  height: 400px;
`

export const AnimeImage = styled.img`
  width: 100%;
  height: 100%;
`

export const AnimeContent = styled.div`
  padding-top: 0.5rem;
`

export const AnimeTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
