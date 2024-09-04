'use client'

import { ContainerGrid } from '@/components/Containers/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useMovieInfantil, useMoviesPrefetch } from '@/queries/queries'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { InfantilItem } from './InfantilItem'

const MoviesPage = () => {
  useMoviesPrefetch()
  const { data: movies, isLoading, error } = useMovieInfantil()
  const pathname = usePathname()

  if (!movies) return
  if (isLoading) return <Loading />
  if (error) return <ErrorComponent>Erro ao carregar filmes.</ErrorComponent>

  return (
    <section className='mt-[72px] pt-4 space-y-4'>
      <h2 className='font-semibold text-3xl px-5'>Filmes infantis</h2>

      <ContainerGrid>
        {movies.map((movie) => (
          <Link key={movie.id} href={`${pathname}/${movie.id}`}>
            <InfantilItem movie={movie} />
          </Link>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default MoviesPage
