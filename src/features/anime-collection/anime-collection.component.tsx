import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { useState } from 'react'

import {
  AnimeCollectionContainer,
  AnimeCollectionItem,
  ButtonContainer,
  CreateButtonContainer,
} from './anime-collection.style'
import { Button } from '@components/button/button.component'
import {
  CreateCollectionModal,
  DeleteCollectionModal,
  EditCollectionModal,
} from './anime-collection-modal/anime-collection-modal.component'
import { IAnimeCollection } from './anime-collection.type'
import { AnimeCollectionContext } from './anime-collection.context'

export function AnimeCollection() {
  const [editCollectionName, setEditCollectionName] = useState('')
  const [deleteCollectionName, setDeleteCollectionName] = useState('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const { editAnimeCollection, collectionList, deleteAnimeCollection } =
    useContext(AnimeCollectionContext)

  const onOpenEditModal = () => setIsEditModalOpen(true)
  const onCloseEditModal = () => setIsEditModalOpen(false)
  const onOpenCreateModal = () => setIsCreateModalOpen(true)
  const onCloseCreateModal = () => setIsCreateModalOpen(false)
  const onOpenDeleteModal = () => setIsDeleteModalOpen(true)
  const onCloseDeleteModal = () => setIsDeleteModalOpen(false)

  return (
    <>
      <h1>Collection List</h1>
      <CreateButtonContainer>
        <Button variant="primary" onClick={onOpenCreateModal}>
          Create collection
        </Button>
      </CreateButtonContainer>
      <AnimeCollectionContainer>
        {collectionList?.length > 0 ? (
          collectionList?.map((collection: IAnimeCollection, index: number) => {
            const collectionImage =
              collection?.animeList?.length > 0
                ? collection?.animeList[0]?.coverImage.extraLarge
                : '/images/default-placeholder.svg'

            return (
              <Link
                href={`/collection/${collection?.name}`}
                key={`${collection?.name}-${index}`}
              >
                <AnimeCollectionItem>
                  <figure>
                    <Image
                      src={collectionImage}
                      alt={collection?.name}
                      width={200}
                      height={300}
                    />
                  </figure>
                  <h3>{collection?.name}</h3>
                  <ButtonContainer>
                    <Button
                      variant="primary"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        event.preventDefault()
                        setEditCollectionName(collection?.name)
                        onOpenEditModal()
                      }}
                    >
                      Edit collection
                    </Button>
                  </ButtonContainer>
                  <ButtonContainer>
                    <Button
                      variant="danger"
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        event.preventDefault()
                        setDeleteCollectionName(collection?.name)
                        onOpenDeleteModal()
                      }}
                    >
                      Delete collection
                    </Button>
                  </ButtonContainer>
                </AnimeCollectionItem>
              </Link>
            )
          })
        ) : (
          <h3>There are no collections</h3>
        )}
      </AnimeCollectionContainer>
      <EditCollectionModal
        isOpen={isEditModalOpen}
        onClose={onCloseEditModal}
        onEditAnimeCollection={editAnimeCollection}
        collectionName={editCollectionName}
      />
      <CreateCollectionModal
        isOpen={isCreateModalOpen}
        onClose={onCloseCreateModal}
        showCollection={false}
      />
      <DeleteCollectionModal
        isOpen={isDeleteModalOpen}
        onClose={onCloseDeleteModal}
        collectionName={deleteCollectionName}
        onDeleteAnimeCollection={deleteAnimeCollection}
      />
    </>
  )
}
