'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useMovies, useMoviesPrefetch } from '@/utils/queries'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
            <li className='relative min-w-40 md:min-w-48 w-full min-h-60 md:min-h-72 h-full cursor-pointer transition scale-95 hover:scale-100'>
              <Image
                className={`w-full h-full object-cover rounded`}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title || movie.original_title}
                width={300}
                height={450}
                priority
                draggable={false}
              />
            </li>
          </Link>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default MoviesPage
