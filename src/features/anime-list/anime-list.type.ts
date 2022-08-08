export interface IAnimeList {
  id: number
  title: {
    userPreferred: string
  }
  coverImage: {
    extraLarge: string
  }
  bannerImage: string
  averageScore: number
}
