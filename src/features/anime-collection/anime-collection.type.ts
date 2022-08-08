import { IAnimeList } from '@features/anime-list/anime-list.type'

export interface IAnimeCollection {
  name: string
  animeList: IAnimeList[]
}
