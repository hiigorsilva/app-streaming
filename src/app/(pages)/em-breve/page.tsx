'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useUpComing } from '@/queries/queries'
import { MovieItem } from '../movies/MovieItem'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { formatRating } from '@/functions/formatRating'

const UpComingPage = () => {
  const { data: movies, isLoading, error } = useUpComing()

  if (!movies) return
  if (isLoading) return <Loading />
  if (error) return <ErrorComponent>Erro ao carregar filmes.</ErrorComponent>
  console.log(movies)

  return (
    <section className='mt-[72px] pt-4 space-y-6'>
      <h2 className='font-semibold text-3xl px-5'>Em breve no catálogo</h2>

      <ContainerGrid>
        {movies.map((movie) => (
          <Dialog key={movie.id}>
            <DialogTrigger>
              <MovieItem movie={movie} />
            </DialogTrigger>

            <DialogContent className='max-w-lg w-[90%] max-h-[80%] p-4 sm:p-8 rounded-[.5rem] sm:rounded-xl overflow-y-auto'>
              <DialogHeader className='space-y-3'>
                <DialogTitle className='text-left sm:text-left'>
                  {movie.title || movie.original_title}
                </DialogTitle>

                <DialogDescription className='text-base text-left sm:text-left'>
                  {movie.overview && movie.overview}
                  {!movie.overview && 'Nenhuma descrição disponível.'}
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className='w-full flex flex-row sm:flex-row justify-start sm:justify-start items-center gap-3'>
                <p className='font-semibold text-green-400'>{`${formatRating(movie.vote_average)}% relevante`}</p>
                <p>{new Date(movie.release_date).getFullYear()}</p>
                <p className='text-xs leading-none uppercase px-1.5 py-1 rounded border border-zinc-50'>
                  HD
                </p>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default UpComingPage
