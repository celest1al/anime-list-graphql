import { gql } from '@apollo/client'

export const ANIME_DETAIL_QUERY = gql`
  query GetAnimeDetail($id: Int!) {
    Media(id: $id) {
      id
      title {
        romaji
        userPreferred
      }
      coverImage {
        extraLarge
      }
      bannerImage
      averageScore
      description
      popularity
      episodes
      status
      season
      seasonYear
      genres
    }
  }
`
