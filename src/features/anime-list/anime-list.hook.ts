import { useQuery } from '@apollo/client'

import { ANIME_LIST_QUERY } from './anime-list.query'

interface IUseGetAnimeListProps {
  page: number
}

export function useGetAnimeList({ page }: IUseGetAnimeListProps) {
  const { loading, error, data } = useQuery(ANIME_LIST_QUERY, {
    variables: {
      page,
      perPage: 10,
    },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  })

  return {
    data,
    loading,
    error,
  }
}
