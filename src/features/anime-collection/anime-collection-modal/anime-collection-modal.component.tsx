import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'

import { Button } from '@components/button/button.component'
import { Close } from '@components/icons/icons.component'
import { Modal } from '@components/modal/modal.component'
import { Input } from '@components/input/input.component'
import {
  CollectionModalBody,
  CollectionModalContainer,
  CollectionModalHeader,
  FormContainer,
  CloseButton,
  CollectionList,
  CollectionItem,
  ModalCollection,
  CollectionItemTitle,
  DeleteButtonContainer,
} from './anime-collection-modal.style'
import { inputRegex } from './anime-collection-modal.util'
import { AnimeCollectionContext } from '@features/anime-collection/anime-collection.context'
import { IAnimeList } from '@features/anime-list/anime-list.type'
import { IAnimeCollection } from '../anime-collection.type'

interface IAnimeCollectionModalProps {
  isOpen: boolean
  onClose: () => void
  collectionName?: string
  showCollection?: boolean
  animeList?: IAnimeList | IAnimeList[]
}

interface IEditAnimeModalProps extends IAnimeCollectionModalProps {
  onEditAnimeCollection: (
    newName: string,
    oldName: string
  ) => void | { isError: boolean; errorMessage: string }
}

interface IDeleteCollectionModalProps extends IAnimeCollectionModalProps {
  onDeleteAnimeCollection: (
    name: string
  ) => void | { isError: boolean; errorMessage: string }
}

interface IRemoveAnimeModalProps extends IAnimeCollectionModalProps {
  anime: IAnimeList
  onRemoveAnime: (
    collectionName: string,
    animeId: number
  ) => void | { isError: boolean; errorMessage: string }
}

export function CreateCollectionModal({
  isOpen,
  animeList,
  showCollection,
  onClose,
}: IAnimeCollectionModalProps) {
  const [collectionName, setCollectionName] = useState('')
  const [error, setError] = useState<{ message: string; isError: boolean }>({
    message: '',
    isError: false,
  })
  const [isTouch, setIsTouch] = useState(false)
  const { collectionList, createCollection, addAnimeToCollection } = useContext(
    AnimeCollectionContext
  )

  useEffect(() => {
    if (isTouch) {
      if (inputRegex.test(collectionName)) {
        setError({ message: '', isError: false })
      } else {
        if (collectionName.length === 0) {
          setError({ message: 'List name cannot be empty', isError: true })
        } else {
          setError({ message: 'Only use alphabets and numbers', isError: true })
        }
      }
    }
  }, [collectionName, isTouch])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`Modal to create a new anime collection`}
    >
      <CollectionModalContainer>
        <CollectionModalHeader>
          <CloseButton onClick={onClose}>
            <Close />
          </CloseButton>
        </CollectionModalHeader>
        <CollectionModalBody>
          <FormContainer>
            <Input
              id="new-anime-collection-name"
              isFullWidth
              labelName="Collection Name"
              placeholder="Create anime collection e.g: My anime collection"
              value={collectionName}
              error={error}
              onChange={(e) => {
                setIsTouch(true)
                setCollectionName(e.target.value)
              }}
            />
          </FormContainer>
          <Button
            variant="primary"
            onClick={() => {
              if (error?.isError) {
                return
              } else {
                const result = createCollection(collectionName, animeList)

                if (result?.isError) {
                  setError({ message: result?.errorMessage, isError: true })
                } else {
                  setCollectionName('')
                  setIsTouch(false)
                  onClose()
                }
              }
            }}
          >
            Create new collection
          </Button>
        </CollectionModalBody>
        {showCollection && (
          <ModalCollection>
            <CollectionList>
              {collectionList?.map((collection: IAnimeCollection) => {
                const selectedAnimeImage =
                  collection?.animeList?.length > 0
                    ? collection?.animeList[0]?.coverImage?.extraLarge
                    : '/images/default-placeholder.svg'
                return (
                  <CollectionItem key={collection?.name}>
                    <Image
                      src={selectedAnimeImage}
                      alt={`${collection?.name} image`}
                      width={100}
                      height={141}
                    />
                    <CollectionItemTitle>
                      {collection?.name}
                    </CollectionItemTitle>
                    <Button
                      variant="primary"
                      onClick={() => {
                        const result = addAnimeToCollection(
                          collection?.name,
                          animeList as IAnimeList
                        )

                        if (result?.isError) {
                          setError({
                            message: result?.errorMessage,
                            isError: true,
                          })
                        } else {
                          onClose()
                        }
                      }}
                    >
                      Add to list
                    </Button>
                  </CollectionItem>
                )
              })}
            </CollectionList>
          </ModalCollection>
        )}
      </CollectionModalContainer>
    </Modal>
  )
}

export function EditCollectionModal({
  isOpen,
  collectionName,
  onClose,
  onEditAnimeCollection,
}: IEditAnimeModalProps) {
  const [listName, setListName] = useState('')
  const [error, setError] = useState<{ message: string; isError: boolean }>({
    message: '',
    isError: false,
  })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (collectionName) {
      setListName(collectionName)
    }
  }, [collectionName])

  useEffect(() => {
    if (isTouch) {
      if (inputRegex.test(listName)) {
        setError({ message: '', isError: false })
      } else {
        if (listName.length === 0) {
          setError({ message: 'List name cannot be empty', isError: true })
        } else {
          setError({ message: 'Only use alphabets and numbers', isError: true })
        }
      }
    }
  }, [listName, isTouch])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`Modal to edit collection name`}
    >
      <CollectionModalContainer>
        <CollectionModalHeader>
          <CloseButton onClick={onClose}>
            <Close />
          </CloseButton>
        </CollectionModalHeader>
        <CollectionModalBody>
          <FormContainer>
            <Input
              id="edit-anime-collection-name"
              isFullWidth
              labelName="Collection Name"
              placeholder="Edit anime collection e.g: My anime list"
              value={listName}
              error={error}
              onChange={(e) => {
                setIsTouch(true)
                setListName(e.target.value)
              }}
            />
          </FormContainer>
          <Button
            variant="primary"
            onClick={() => {
              if (error?.isError) {
                return
              } else {
                const result = onEditAnimeCollection(
                  listName,
                  collectionName as string
                )

                if (result?.isError) {
                  setError({ message: result?.errorMessage, isError: true })
                } else {
                  setIsTouch(false)
                  onClose()
                }
              }
            }}
          >
            Edit collection
          </Button>
        </CollectionModalBody>
      </CollectionModalContainer>
    </Modal>
  )
}

export function DeleteCollectionModal({
  isOpen,
  onClose,
  collectionName,
  onDeleteAnimeCollection,
}: IDeleteCollectionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`Modal to delete collection name`}
    >
      <CollectionModalContainer>
        <CollectionModalHeader>
          <CloseButton onClick={onClose}>
            <Close />
          </CloseButton>
        </CollectionModalHeader>
        <CollectionModalBody>
          <h1>Delete Collection</h1>
          <p>Are you sure you want to delete {collectionName}?</p>
          <DeleteButtonContainer>
            <Button variant="primary" onClick={() => onClose()}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                onDeleteAnimeCollection(collectionName as string)
                onClose()
              }}
            >
              Confirm
            </Button>
          </DeleteButtonContainer>
        </CollectionModalBody>
      </CollectionModalContainer>
    </Modal>
  )
}

export function RemoveAnimeModal({
  isOpen,
  onClose,
  collectionName,
  anime,
  onRemoveAnime,
}: IRemoveAnimeModalProps) {
  console.log('anime: ', anime)
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`Modal to remove an anime from collection`}
    >
      <CollectionModalContainer>
        <CollectionModalHeader>
          <CloseButton onClick={onClose}>
            <Close />
          </CloseButton>
        </CollectionModalHeader>
        <CollectionModalBody>
          <h1>Remove anime from collection</h1>
          <p>
            Are you sure you want to delete <strong>{anime?.title?.userPreferred}</strong> from collection?
          </p>
          <DeleteButtonContainer>
            <Button variant="primary" onClick={() => onClose()}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                onRemoveAnime(collectionName as string, anime?.id)
                onClose()
              }}
            >
              Confirm
            </Button>
          </DeleteButtonContainer>
        </CollectionModalBody>
      </CollectionModalContainer>
    </Modal>
  )
}
