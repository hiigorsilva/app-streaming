'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useSearchMovie } from '@/queries/queries'
import Link from 'next/link'
import { MovieItem } from '../../movies/MovieItem'
import { formatStringDecode } from '@/functions/formatStringDecode'

type SearchPageProps = {
  params: {
    searchTerm: string
  }
}

const SearchTermPage = ({ params }: SearchPageProps) => {
  const { searchTerm } = params

  const { data: movies, isLoading, error } = useSearchMovie(searchTerm)

  if (!movies) return
  if (isLoading) return <Loading />
  if (error) return <ErrorComponent>Erro ao carregar filmes.</ErrorComponent>

  return (
    <section className='mt-[72px] pt-4 space-y-4'>
      <div className='px-5 space-y-2'>
        <h2 className='font-semibold text-3xl text-zinc-200'>Filmes</h2>
        <p className='text-sm space-x-2'>
          <span>Você está buscando por:</span>
          <span className='font-semibold text-zinc-400 uppercase'>
            {formatStringDecode(searchTerm)}
          </span>
        </p>
      </div>

      <ContainerGrid>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default SearchTermPage
