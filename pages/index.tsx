import type { NextPage } from 'next'
import Head from 'next/head'

import { initializeApollo } from '@lib/apollo-client'
import {
  ANIME_LIST_QUERY,
  animeListQueryVars,
} from '@features/anime-list/anime-list.query'

import { AnimeListHome } from '@features/anime-list/anime-list.component'
import { Layout } from '@components/layout/layout.component'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Anime list app</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <AnimeListHome />
    </Layout>
  </>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ANIME_LIST_QUERY,
    variables: animeListQueryVars,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  }
}

export default Home
