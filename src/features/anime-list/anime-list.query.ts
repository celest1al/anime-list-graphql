import { gql } from '@apollo/client'

export const ANIME_LIST_QUERY = gql`
  query GetAnimeList($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          userPreferred
        }
        coverImage {
          extraLarge
        }
        bannerImage
        averageScore
      }
    }
  }
`

export const animeListQueryVars = {
  page: 1,
  perPage: 10,
}
