import { useEffect, useState } from 'react'
import { IAnimeList } from '@features/anime-list/anime-list.type'
import { IAnimeCollection } from './anime-collection.type'

export function useAnimeCollection() {
  const [collectionsIds, setCollectionsIds] = useState<string[]>([])
  const [collectionList, setCollectionsList] = useState<IAnimeCollection[]>([])

  useEffect(() => {
    let localCollections = localStorage.getItem('collections') || '[]'
    let parsedCollections = JSON.parse(localCollections)

    if (parsedCollections.length > 0) {
      setCollectionsIds(parsedCollections)
    }
  }, [])

  useEffect(() => {
    if (collectionsIds.length > 0) {
      let newCollection = []
      for (let collection of collectionsIds) {
        let localCollection = localStorage.getItem(`${collection}`) || '{}'
        let parsedCollection = JSON.parse(localCollection) as any

        newCollection.push(parsedCollection)
      }

      setCollectionsList(newCollection)
    }
  }, [collectionsIds])

  const createCollection = (
    collectionName: string,
    anime?: IAnimeList | IAnimeList[]
  ) => {
    let prevCollectionIds = [...collectionsIds]
    let indexCollection = collectionsIds.findIndex(
      (collection) => collection === collectionName
    )

    if (indexCollection === -1) {
      setCollectionsIds((prev) => [...prev, collectionName])
      localStorage.setItem(
        `collections`,
        JSON.stringify([...prevCollectionIds, collectionName])
      )
      localStorage.setItem(
        `${collectionName}`,
        JSON.stringify({
          name: collectionName,
          animeList: anime ? (Array.isArray(anime) ? [...anime] : [anime]) : [],
        })
      )
    } else {
      return {
        isError: true,
        errorMessage: 'Collection already exists',
      }
    }
  }

  const getUniqueAnimeList = (animeList: IAnimeList[]) => {
    const seen = new Set()

    const filtered = animeList.filter((anime) => {
      const duplicate = seen.has(anime?.id)
      seen.add(anime?.id)
      return !duplicate
    })

    return filtered
  }

  const addAnimeToCollection = (collectionId: string, anime: IAnimeList) => {
    let copyCollection = [...collectionList]

    let indexCollection = collectionList.findIndex(
      (item) => item?.name === collectionId
    )

    if (indexCollection === -1) {
      return {
        isError: true,
        errorMessage: 'Collection not found',
      }
    } else {
      let newAnimeList = [...copyCollection[indexCollection].animeList, anime]
      newAnimeList = getUniqueAnimeList(newAnimeList)
      copyCollection[indexCollection].animeList = newAnimeList
      setCollectionsList(copyCollection)
      localStorage.setItem(
        `${collectionId}`,
        JSON.stringify({
          name: collectionId,
          animeList: newAnimeList,
        })
      )
    }
  }

  const removeAnimeFromCollection = (
    collectionId: string,
    animeId: number
  ) => {
    let copyCollection = [...collectionList]

    let indexCollection = collectionList.findIndex(
      (item) => item?.name === collectionId
    )

    if (indexCollection === -1) {
      return {
        isError: true,
        errorMessage: 'Collection not found',
      }
    } else {
      let newAnimeList = copyCollection[indexCollection].animeList.filter(
        (anime) => anime.id !== animeId
      )
      copyCollection[indexCollection].animeList = newAnimeList
      setCollectionsList(copyCollection)
      localStorage.setItem(
        `${collectionId}`,
        JSON.stringify({
          name: collectionId,
          animeList: newAnimeList,
        })
      )
    }
  }

  const editAnimeCollection = (newName: string, oldName: string) => {
    let copyCollection = [...collectionList]
    let copyCollectionIds = [...collectionsIds]

    let checkIsDuplicateIdx = copyCollectionIds.findIndex(
      (item) => item === newName
    )

    let indexCollection = copyCollection.findIndex(
      (item) => item?.name === oldName
    )

    if (checkIsDuplicateIdx === -1) {
      if (indexCollection === -1) {
        return {
          isError: true,
          errorMessage: 'Collection not found',
        }
      } else {
        let oldIndex = copyCollectionIds.findIndex((item) => item === oldName)
        copyCollectionIds[oldIndex] = newName
        copyCollection[indexCollection].name = newName
        setCollectionsIds(copyCollectionIds)
        setCollectionsList(copyCollection)

        localStorage.setItem('collections', JSON.stringify(copyCollectionIds))
        localStorage.removeItem(`${oldName}`)
        localStorage.setItem(
          `${newName}`,
          JSON.stringify(copyCollection[indexCollection])
        )
      }
    } else {
      return {
        isError: true,
        errorMessage: 'Collection name already exists',
      }
    }
  }

  const deleteAnimeCollection = (collectionName: string) => {
    let copyIds = [...collectionsIds]
    let copyCollection = [...collectionList]

    let filteredIds = copyIds.filter((item) => item !== collectionName)
    let filteredCollection = copyCollection.filter(item => item?.name === collectionName)

    setCollectionsIds(filteredIds)
    setCollectionsList(filteredCollection)
    localStorage.setItem('collections', JSON.stringify(filteredIds))
    localStorage.removeItem(`${collectionName}`)
  }

  return {
    collectionsIds,
    collectionList,
    createCollection,
    addAnimeToCollection,
    editAnimeCollection,
    deleteAnimeCollection,
    removeAnimeFromCollection
  }
}
