import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AnimeCollectionContext } from '@features/anime-collection/anime-collection.context'
import { IAnimeCollection } from '../anime-collection.type'
import {
  AnimeListContainer,
  AnimeListItem,
  ButtonContainer,
  CollectionTitleContainer,
  EditCollectionIcon
} from './anime-collection-detail.style'
import { Button } from '@components/button/button.component'
import {
  EditCollectionModal,
  RemoveAnimeModal
} from '../anime-collection-modal/anime-collection-modal.component'
import { IAnimeList } from '@features/anime-list/anime-list.type'

interface IAnimeCollectionDetailProps {
  collectionId: string
}

export function AnimeCollectionDetail({
  collectionId,
}: IAnimeCollectionDetailProps) {
  const [collectionDetail, setCollectionDetail] =
    useState<IAnimeCollection | null>(null)
  const [selectedAnime, setSelectedAnime] = useState<IAnimeList | null>(null)
  const [editedName, setEditedName] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteAnimeModalOpen, setIsDeleteAnimeModalOpen] = useState(false)
  const { collectionList, editAnimeCollection, removeAnimeFromCollection } = useContext(AnimeCollectionContext)
  const router = useRouter()

  useEffect(() => {
    if (collectionList.length > 0) {
      const collection = collectionList.find(
        (collection: IAnimeCollection) => collection.name === collectionId
      )
      if (collection) {
        setCollectionDetail(collection)
      }
    }
  }, [collectionId, collectionList])

  const onOpenEditModal = () => {
    setIsEditModalOpen(true)
    setEditedName(collectionDetail?.name as string)
  }

  const onCloseEditModal = () => setIsEditModalOpen(false)

  const onOpenDeleteAnimeModal = () => setIsDeleteAnimeModalOpen(true)

  const onCloseDeleteAnimeModal = () => {
    setIsDeleteAnimeModalOpen(false)
    setSelectedAnime(null)
  }

  const onEditCollectionName = (newName: string, oldName: string) => {
    editAnimeCollection(newName, oldName)
    router.replace(
      `/collection/[collection_id]`,
      `/collection/${newName}`,
      { shallow: true }
    )
  }


  return (
    <>
      <Head>
        <title>Anime Collection | {collectionDetail?.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {collectionDetail ? (
        <>
          <CollectionTitleContainer>
            <h1>{collectionDetail?.name}</h1>
            <EditCollectionIcon onClick={onOpenEditModal}>
              <Image
                src="/icons/pencil-alt.svg"
                alt="edit collection name"
                width={20}
                height={20}
              />
            </EditCollectionIcon>
          </CollectionTitleContainer>
          <AnimeListContainer>
            {collectionDetail?.animeList.map((anime: any) => (
              <Link key={anime.id} href={`/detail/${anime?.id}`}>
                <AnimeListItem>
                  <figure>
                    <Image
                      src={anime?.coverImage?.extraLarge}
                      alt={`image of ${anime?.title?.userPreferred}`}
                      width={200}
                      height={300}
                    />
                  </figure>
                  <h3>{anime?.title?.userPreferred}</h3>
                  <ButtonContainer>
                    <Button
                      variant="danger"
                      onClick={(event) => {
                        event.preventDefault()
                        setSelectedAnime(anime)
                        onOpenDeleteAnimeModal()
                      }}
                    >
                      Remove
                    </Button>
                  </ButtonContainer>
                </AnimeListItem>
              </Link>
            ))}
          </AnimeListContainer>
          <EditCollectionModal
            isOpen={isEditModalOpen}
            onClose={onCloseEditModal}
            collectionName={editedName}
            onEditAnimeCollection={onEditCollectionName}
          />
          <RemoveAnimeModal
            isOpen={isDeleteAnimeModalOpen}
            onClose={onCloseDeleteAnimeModal}
            anime={selectedAnime as IAnimeList}
            collectionName={collectionDetail?.name}
            onRemoveAnime={removeAnimeFromCollection}
          />
        </>
      ) : (
        <>
          <Head>
            <title>Anime Collection Detail</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>There is no collection detail with {collectionId} name</h1>
        </>
      )}
    </>
  )
}
