'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { MovieItem } from '@/components/MovieItem'
import { useMovies } from '@/utils/queries'

const MoviesPage = () => {
  const { data: movies, isFetching, error } = useMovies()

  if (!movies) return
  if (isFetching) return <Loading />
  if (error) return <ErrorComponent>Erro ao carregar filmes.</ErrorComponent>

  return (
    <section className='mt-[72px] pt-4 space-y-4'>
      <h2 className='font-semibold text-3xl px-5'>Filmes</h2>

      <ContainerGrid>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ContainerGrid>
    </section>
  )
}

export default MoviesPage
