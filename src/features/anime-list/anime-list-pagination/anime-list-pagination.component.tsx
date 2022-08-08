import Image from 'next/image'

import { DOTS } from './anime-list-pagination.hook'
import {
  PaginationArrow,
  PaginationContainer,
  PaginationDots,
  PaginationNumber,
} from './anime-list-pagination.style'

interface IPaginationProps {
  paginationRange: (number | string)[] | undefined
  currentPage: number
  onChangePage: (page: number) => void
}

export function Pagination({
  currentPage,
  paginationRange,
  onChangePage,
}: IPaginationProps): JSX.Element | null {
  const onPrevious = () => {
    onChangePage(currentPage - 1)
  }

  const onNext = () => {
    onChangePage(currentPage + 1)
  }

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1]
  return (
    <PaginationContainer>
      <PaginationArrow active={currentPage > 1} onClick={onPrevious}>
        <Image
          src="/icons/chevron-left.svg"
          alt="prev page"
          width={32}
          height={32}
        />
      </PaginationArrow>
      {paginationRange &&
        paginationRange?.map((pageNumber: number | string, index: number) => {
          if (pageNumber === DOTS) {
            return (
              <PaginationDots key={`${pageNumber}-${index}`}>
                &#8230;
              </PaginationDots>
            )
          }

          return (
            <PaginationNumber
              key={`${pageNumber}-${index}`}
              onClick={() => onChangePage(Number(pageNumber))}
              isCurrentPage={pageNumber === currentPage}
            >
              {pageNumber}
            </PaginationNumber>
          )
        })}
      <PaginationArrow active={currentPage < Number(lastPage)} onClick={onNext}>
        <Image
          src="/icons/chevron-right.svg"
          alt="prev page"
          width={32}
          height={32}
        />
      </PaginationArrow>
    </PaginationContainer>
  )
}
