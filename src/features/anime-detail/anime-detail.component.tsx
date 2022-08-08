import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'

import { useGetAnimeList } from './anime-detail.hook'
import { AnimeCollectionContext } from '@features/anime-collection/anime-collection.context'

import { CreateCollectionModal } from '@features/anime-collection/anime-collection-modal/anime-collection-modal.component'
import { AnimeDetailInfo } from './anime-detail-info/anime-detail-info.component'
import {
  AnimeDetailContainer,
  AnimeDetailContent,
  AnimeDescription,
  AnimeCoverImage,
  AnimeCoverImageContainer,
  AddedButtonContainer,
  CollectionLink,
} from './anime-detail.style'
import { Button } from '@components/button/button.component'
import { IAnimeCollection } from '@features/anime-collection/anime-collection.type'
import { IAnimeList } from '@features/anime-list/anime-list.type'

interface IAnimeDetailProps {
  animeId: number
}

export function AnimeDetail({ animeId }: IAnimeDetailProps) {
  const { data, loading, error } = useGetAnimeList({ animeId })
  const { collectionList } = useContext(AnimeCollectionContext)
  const [isModalListOpen, setIsModalListOpen] = useState(false)
  const [animeCollection, setAnimeCollection] =
    useState<IAnimeCollection[]>([])

  const onOpenModalList = () => setIsModalListOpen(true)

  const onCloseModalList = () => setIsModalListOpen(false)

  useEffect(() => {
    if (data) {
      if (collectionList) {
        let filtered = []
        for (let collection of collectionList) {
          let indexAnime = collection?.animeList?.findIndex(
            (item: IAnimeList) => item.id === data?.Media?.id
          )

          if (indexAnime !== -1) {
            filtered.push(collection)
          }
        }
        setAnimeCollection(filtered)
      }
    }
  }, [collectionList, data])

  if (error) return <p>Error: {error.message}</p>
  if (loading) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>{data?.Media?.title?.userPreferred}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimeDetailContainer>
        <figure>
          <Image
            src={data?.Media?.bannerImage}
            alt={data?.Media?.title?.userPreferred}
            width={1408}
            height={300}
          />
        </figure>
        <h1>{data?.Media?.title?.userPreferred}</h1>
        <AnimeDetailContent>
          <AnimeCoverImageContainer>
            <AnimeCoverImage>
              <Image
                src={data?.Media?.coverImage?.extraLarge}
                alt={data?.Media?.title?.userPreferred}
                width={277}
                height={400}
              />
            </AnimeCoverImage>
            <AddedButtonContainer>
              <Button variant="primary" onClick={onOpenModalList} isFullWidth>
                Add to list
              </Button>
              {
                animeCollection.map((anime, index) => {
                  return (
                    <Link href={`/collection/${anime?.name}`} key={`${anime?.name}-${index}`}>
                      <CollectionLink>
                        Added to {anime?.name}
                      </CollectionLink>
                    </Link>
                  )
                })
              }
            </AddedButtonContainer>
          </AnimeCoverImageContainer>
          <div>
            <AnimeDetailInfo
              averageScore={data?.Media?.averageScore}
              popularity={data?.Media?.popularity}
              episodes={data?.Media?.episodes}
              status={data?.Media?.status}
              season={data?.Media?.season}
              seasonYear={data?.Media?.seasonYear}
              genres={data?.Media?.genres}
            />
            <div>
              <h4>Description: </h4>
              <AnimeDescription>
                <p
                  dangerouslySetInnerHTML={{ __html: data?.Media?.description }}
                />
              </AnimeDescription>
            </div>
          </div>
        </AnimeDetailContent>
      </AnimeDetailContainer>
      <CreateCollectionModal
        isOpen={isModalListOpen}
        animeList={{
          id: data?.Media?.id,
          averageScore: data?.Media?.averageScore,
          bannerImage: data?.Media?.bannerImage,
          coverImage: data?.Media?.coverImage,
          title: data?.Media?.title,
        }}
        onClose={onCloseModalList}
        showCollection
      />
    </>
  )
}
