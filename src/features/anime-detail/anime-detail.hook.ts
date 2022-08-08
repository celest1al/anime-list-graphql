import { useQuery } from '@apollo/client'

import { ANIME_DETAIL_QUERY } from './anime-detail.query'

interface IUseGetAnimeDetailProps {
  animeId: number
}

export function useGetAnimeList({ animeId }: IUseGetAnimeDetailProps) {
  const { loading, error, data } = useQuery(ANIME_DETAIL_QUERY, {
    variables: {
      id: animeId,
    },
    notifyOnNetworkStatusChange: true,
  })

  return {
    data,
    loading,
    error,
  }
}
