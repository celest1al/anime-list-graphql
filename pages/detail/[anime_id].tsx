import type { NextPageContext } from 'next'

import { initializeApollo } from '@lib/apollo-client'
import { ANIME_DETAIL_QUERY } from '@features/anime-detail/anime-detail.query'
import { AnimeCollectionProvider } from '@features/anime-collection/anime-collection.context'

import { Layout } from '@components/layout/layout.component'
import { AnimeDetail } from '@features/anime-detail/anime-detail.component'

interface IAnimeDetailPageProps {
  animeId: number
}

const DetailPage = ({ animeId }: IAnimeDetailPageProps) => (
  <AnimeCollectionProvider>
    <Layout>
      <AnimeDetail animeId={animeId} />
    </Layout>
  </AnimeCollectionProvider>
)

export async function getServerSideProps(context: NextPageContext) {
  const animeId = context?.query?.anime_id
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ANIME_DETAIL_QUERY,
    variables: {
      id: Number(animeId),
    },
  })

  return {
    props: {
      animeId: Number(animeId),
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default DetailPage
