import { AnimeInfo } from '../anime-detail.style'

interface IAnimeDetailInfoProps {
  averageScore: number
  popularity: number
  episodes: number
  status: string
  season: string
  seasonYear: number
  genres: string[]
}

export function AnimeDetailInfo({
  averageScore,
  popularity,
  episodes,
  status,
  season,
  seasonYear,
  genres,
}: IAnimeDetailInfoProps) {
  return (
    <AnimeInfo>
      <div>
        <h4>Score: </h4>
        <p>{averageScore}</p>
      </div>
      <div>
        <h4>Popularity: </h4>
        <p>{popularity}</p>
      </div>
      <div>
        <h4>Episodes: </h4>
        <p>{episodes}</p>
      </div>
      <div>
        <h4>status: </h4>
        <p>{status}</p>
      </div>
      <div>
        <h4>Season: </h4>
        <p>
          {season} {seasonYear}
        </p>
      </div>
      <div>
        <h4>Genres: </h4>
        <p>{genres.join(', ')}</p>
      </div>
    </AnimeInfo>
  )
}
