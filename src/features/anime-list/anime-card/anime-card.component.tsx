import Link from 'next/link'
import Image from 'next/image'
import {
  AnimeContent,
  AnimeImage,
  CardContainer,
  ImageContainer,
  AnimeTitle,
} from './anime-card.style'

interface IAnimeCardProps {
  id: number
  title: string
  coverImage: string
  score: number
}

export function AnimeCard({ id, title, coverImage, score }: IAnimeCardProps) {
  return (
    <Link href={`/detail/${id}`}>
      <CardContainer>
        <ImageContainer>
          <Image
            src={coverImage}
            alt={`image of ${title}`}
            width={277}
            height={400}
          />
        </ImageContainer>
        <AnimeContent>
          <AnimeTitle>{title}</AnimeTitle>
          <p>Score: {score}</p>
        </AnimeContent>
      </CardContainer>
    </Link>
  )
}
