import Head from 'next/head'
import { Layout } from '@components/layout/layout.component'
import { AnimeCollection } from '@features/anime-collection/anime-collection.component'
import { AnimeCollectionProvider } from '@features/anime-collection/anime-collection.context'

const CollectionPage = () => (
  <AnimeCollectionProvider>
    <Head>
      <title>Anime Collections List</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <AnimeCollection />
    </Layout>
  </AnimeCollectionProvider>
)

export default CollectionPage
