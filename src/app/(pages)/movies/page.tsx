'use client'

import { ContainerGrid } from '@/components/Containers/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useMovies, useMoviesPrefetch } from '@/queries/queries'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MovieItem } from './MovieItem'

const MoviesPage = () => {
  useMoviesPrefetch()
  const { data: movies, isFetching, error } = useMovies()
  const pathname = usePathname()

  if (!movies) return
  if (isFetching) return <Loading />
  if (error) return <ErrorComponent>Erro ao carregar filmes.</ErrorComponent>

  return (
    <section className='mt-[72px] pt-4 space-y-4'>
      <h2 className='font-semibold text-3xl px-5'>Filmes</h2>

      <ContainerGrid>
        {movies.map((movie) => (
          <Link key={movie.id} href={`${pathname}/${movie.id}`}>
            <MovieItem movie={movie} />
          </Link>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default MoviesPage
