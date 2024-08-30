'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { Loading } from '@/components/Loading'
import { MovieItem } from '@/components/MovieItem'
import { useSeries } from '@/utils/queries'

const SeriesPage = () => {
  const { data: movies, isFetching, error } = useSeries()

  if (!movies) return
  if (isFetching) return <Loading />
  if (error) return <div className='mt-20 px-5'>Erro ao carregar filmes.</div>

  return (
    <section className='mt-[72px] pt-4 space-y-4'>
      <h2 className='font-semibold text-3xl px-5'>Séries</h2>

      <ContainerGrid>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ContainerGrid>
    </section>
  )
}

export default SeriesPage
