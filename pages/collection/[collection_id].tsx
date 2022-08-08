import type { NextPageContext } from 'next'

import { Layout } from '@components/layout/layout.component'
import { AnimeCollectionDetail } from '@features/anime-collection/anime-collection-detail/anime-collection-detail.component'
import { AnimeCollectionProvider } from '@features/anime-collection/anime-collection.context'

interface ICollectionDetailPageProps {
  collectionId: string
}

const CollectionDetailPage = ({ collectionId }: ICollectionDetailPageProps) => (
  <AnimeCollectionProvider>
    <Layout>
      <AnimeCollectionDetail collectionId={collectionId} />
    </Layout>
  </AnimeCollectionProvider>
)

export async function getServerSideProps(context: NextPageContext) {
  const collectionId = context?.query?.collection_id

  if (!collectionId) {
    return {
      redirect: {
        permanent: false,
        destination: '/collection',
      },
    }
  }

  return {
    props: {
      collectionId: String(collectionId),
    },
  }
}

export default CollectionDetailPage
