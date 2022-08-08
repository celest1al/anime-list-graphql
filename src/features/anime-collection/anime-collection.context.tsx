import { useAnimeCollection } from './anime-collection.hook'
import { createContext } from 'react'

interface IAnimeCollectionProviderProps {
  children: React.ReactNode
}

export const AnimeCollectionContext = createContext<any>({
  collectionsIds: [],
  collectionList: [],
  createCollection: () => {},
  addAnimeToCollection: () => {},
  editAnimeCollection: () => {},
  deleteAnimeCollection: () => {},
  removeAnimeFromCollection: () => {}
})

export const AnimeCollectionProvider = ({
  children,
}: IAnimeCollectionProviderProps) => {
  const {
    collectionsIds,
    collectionList,
    editAnimeCollection,
    addAnimeToCollection,
    createCollection,
    deleteAnimeCollection,
    removeAnimeFromCollection
  } = useAnimeCollection()

  return (
    <AnimeCollectionContext.Provider
      value={{
        collectionsIds,
        collectionList,
        editAnimeCollection,
        addAnimeToCollection,
        createCollection,
        deleteAnimeCollection,
        removeAnimeFromCollection
      }}
    >
      {children}
    </AnimeCollectionContext.Provider>
  )
}
