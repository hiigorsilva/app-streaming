'use client'

import { ContainerBannerId } from '@/components/Containers/ContainerBannerId'
import { ContainerDetailsId } from '@/components/Containers/ContainerDetailsId'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { formatCurrencyToBRL } from '@/functions/formatCurrency'
import { formatRating } from '@/functions/formatRating'
import { formatTimeDuration } from '@/functions/formatTimeDuration'
import { useMovieId } from '@/queries/queries'
import { PlusIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type InfantilPageProps = {
  params: {
    id: number
  }
}

const InfantilItemPage = ({ params }: InfantilPageProps) => {
  const movieId = params.id

  const { data: movie, isLoading, error } = useMovieId(movieId)
  if (!movie) return
  if (isLoading) return <Loading />
  if (error) return <ErrorComponent>Erro ao buscar filme</ErrorComponent>

  const releaseDate = new Date(movie.release_date).getFullYear()
  const genres = movie.genres.map((genre) => genre.name).join(', ')
  const languages = movie.spoken_languages
    .map((language) => language.english_name || language.name)
    .join(', ')
  const prodution = movie.production_companies
    .map((prod) => prod.name)
    .join(', ')
  const balance = movie.revenue - movie.budget

  return (
    <section className='min-h-dvh w-full'>
      {/* BANNER */}
      <div className='relative h-[90dvh] w-full'>
        {/* IMAGEM */}
        <Image
          className='w-full h-full object-cover -z-10'
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.original_title}
          fill
          priority
          draggable={false}
        />

        {/* BANNER */}
        <ContainerBannerId>
          <div className='w-full h-full flex items-end px-5 py-20'>
            <div className='max-w-xl w-full flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <Image
                  className='w-[0.625rem] h-[1.25rem]'
                  src='/simbol-netflix.svg'
                  alt='Série Netflix'
                  width={10}
                  height={20}
                  draggable={false}
                />
                <span className='font-semibold text-xs text-zinc-200 uppercase tracking-[4px]'>
                  Infantil
                </span>
              </div>
              {/* TITLE */}
              <h1 className='font-semibold text-3xl md:text-5xl'>
                {movie.title || movie.original_title}
              </h1>

              {/* BUTTON ACTIONS */}
              <div className='flex items-center gap-3'>
                <Button
                  className='flex items-center gap-2 max-w-48 w-full font-semibold text-sm rounded'
                  asChild
                >
                  <Link
                    href={movie.homepage || `https://www.netflix.com/`}
                    target='_blank'
                  >
                    <Image
                      className='text-zinc-950'
                      src='/icon-play.svg'
                      alt='Assistir'
                      width={12}
                      height={14}
                      draggable={false}
                    />
                    Assistir
                  </Link>
                </Button>

                <Button
                  className='size-10 bg-transparent hover:bg-transparent border border-zinc-50 rounded-full p-2 transition-all hover:opacity-60'
                  title='Adicionar a minha lista'
                >
                  <PlusIcon className='text-zinc-50' />
                </Button>

                <Button
                  className='size-10 bg-transparent hover:bg-transparent border border-zinc-50 rounded-full p-2 transition-all hover:opacity-60'
                  title='Marcar como gostei'
                >
                  <ThumbsUpIcon className='text-zinc-50' />
                </Button>
              </div>
            </div>
          </div>
        </ContainerBannerId>
      </div>

      {/* DETAILS */}
      <div className='px-5 space-y-6'>
        <ul className='flex items-center gap-2 sm:gap-4 font-semibold'>
          {/* RELEVÂNCIA */}
          {movie.vote_average && (
            <li className='text-green-400'>{`${formatRating(movie.vote_average)}% relevante`}</li>
          )}

          {/* ANO DE LANÇAMENTO */}
          {releaseDate && <li>{releaseDate}</li>}

          {/* DURAÇÃO */}
          {movie.runtime > 0 && <li>{formatTimeDuration(movie.runtime)}</li>}

          <li className='text-xs leading-none uppercase px-1.5 py-1 rounded border border-zinc-50'>
            HD
          </li>
        </ul>

        {/* GRID */}
        <ContainerDetailsId>
          {/* LEFT */}
          <ul className='space-y-4'>
            {/* GENRES */}
            {genres && (
              <li className='flex flex-col lg:flex-row items-start gap-2'>
                <h3 className='font-semibold'>Gêneros:</h3>
                <p className='font-normal max-w-xl text-zinc-400'>{genres}</p>
              </li>
            )}

            {/* SINOPSE */}
            {movie.overview && (
              <li className='space-y-1'>
                <h3 className='font-semibold'>Sinópse:</h3>
                <p className='font-normal max-w-xl text-zinc-400'>
                  {movie.overview}
                </p>
              </li>
            )}
          </ul>

          {/* RIGHT */}
          <ul className='space-y-4'>
            {/* PRODUTION */}
            {prodution && (
              <li className='flex flex-col xl:flex-row items-start gap-2'>
                <h3 className='font-semibold'>Produtora:</h3>
                <p className='font-normal text-zinc-400'>{prodution}</p>
              </li>
            )}

            {/* LANGUAGES */}
            {languages && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Idioma:</h3>
                <p className='font-normal text-zinc-400'>{languages}</p>
              </li>
            )}

            {/* BUDGET */}
            {movie.budget > 0 && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Orçamento:</h3>
                <p className='font-normal text-zinc-400'>
                  {formatCurrencyToBRL(movie.budget)}
                </p>
              </li>
            )}

            {/* REVENUE */}
            {movie.revenue > 0 && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Receita:</h3>
                <p className='font-normal text-zinc-400'>
                  {formatCurrencyToBRL(movie.revenue)}
                </p>
              </li>
            )}

            {/* BALANCE */}
            {movie.budget > 0 && movie.revenue > 0 && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>
                  {balance < 0 ? 'Prejuizo' : 'Lucro'}:
                </h3>
                <p className='font-normal text-zinc-400'>
                  {formatCurrencyToBRL(balance)}
                </p>
              </li>
            )}
          </ul>
        </ContainerDetailsId>
      </div>
    </section>
  )
}
export default InfantilItemPage
