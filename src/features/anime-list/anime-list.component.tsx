import { useState } from 'react'
import ContentLoader from 'react-content-loader'

import { usePagination } from './anime-list-pagination/anime-list-pagination.hook'
import { useGetAnimeList } from './anime-list.hook'

import { AnimeCard } from './anime-card/anime-card.component'
import { Pagination } from './anime-list-pagination/anime-list-pagination.component'
import { Container, ListContainer } from './anime-list.style'

interface IListPlaceholderProps {
  rows?: number
  columns?: number
  coverHeight?: number 
  coverWidth?: number
  padding?: number
  speed?: number
}

function ListPlaceholder({
  rows=2,
  columns=7,
  coverHeight=300,
  coverWidth=200,
  padding=10,
  speed=1
}: IListPlaceholderProps) {
  const coverHeightWithPadding = coverHeight + padding
  const coverWidthWithPadding = coverWidth + padding
  const initial = 35
  const covers = Array(columns * rows).fill(1)

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
    >
      <rect
        x="0"
        y="0"
        rx="0"
        ry="0"
        width={columns * coverWidthWithPadding - padding}
        height="20"
      />

      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="0"
            ry="0"
            width={coverWidth}
            height={coverHeight}
          />
        )
      })}
    </ContentLoader>
  )
}

export function AnimeListHome() {
  const [page, setPage] = useState(1)
  const { data, error, loading } = useGetAnimeList({ page })
  const paginationRange = usePagination({
    currentPage: page,
  })

  const onChangePage = (page: number) => {
    setPage(page)
  }

  if (error) return <p>Error loading anime list.</p>
  if (loading) return <ListPlaceholder />
  return (
    <Container>
      <ListContainer>
        {data?.Page?.media?.map((anime: any) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            title={anime?.title?.userPreferred}
            coverImage={anime?.coverImage?.extraLarge}
            score={anime?.averageScore}
          />
        ))}
      </ListContainer>
      <Pagination
        paginationRange={paginationRange}
        currentPage={data?.Page?.pageInfo?.currentPage}
        onChangePage={onChangePage}
      />
    </Container>
  )
}
