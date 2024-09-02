'use client'

import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { formatRating } from '@/functions/formatRating'
import { useSerieId } from '@/utils/queries'
import { PlusIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type MoviePageProps = {
  params: {
    id: number
  }
}

const SerieItemPage = ({ params }: MoviePageProps) => {
  const serieId = params.id

  const { data: serie, isLoading, error } = useSerieId(serieId)
  if (!serie) return
  if (isLoading) return <Loading />
  if (error) return <ErrorComponent>Erro ao buscar série</ErrorComponent>

  const firstDate = new Date(serie.first_air_date).getFullYear()
  const lastDate = new Date(serie.last_air_date).getFullYear()
  const languages = serie.spoken_languages
    .map((language) => language.english_name || language.name)
    .join(', ')
  const nameCreatedBy = serie.created_by
    .map((created) => created.name)
    .join(', ')
  const allGenres = serie.genres.map((genre) => genre.name).join(', ')
  const prodution = serie.production_companies
    .map((prod) => prod.name)
    .join(', ')

  return (
    <section className='min-h-dvh w-full'>
      {/* BANNER */}
      <div className='relative h-[90dvh] w-full'>
        {/* IMAGEM */}
        <Image
          className='w-full h-full object-cover -z-10'
          src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
          alt={serie.name || serie.original_name}
          fill
          priority
        />

        {/* BANNER */}
        <div className='w-full h-full bg-gradient-to-t from-zinc-950 to-zinc-950/5 to-60%'>
          <div className='w-full h-full flex items-end bg-gradient-to-r from-zinc-950/90 from-20% to-zinc-950/5 to-60% px-5 py-20'>
            <div className='max-w-xl w-full flex flex-col gap-3'>
              {/* TITLE */}
              <h1 className='font-semibold text-5xl'>
                {serie.name || serie.original_name}
              </h1>

              {/* BUTTON ACTIONS */}
              <div className='flex items-center gap-3'>
                <Button
                  className='flex items-center gap-2 max-w-48 w-full font-semibold text-sm rounded'
                  asChild
                >
                  <Link href={serie.homepage} target='_blank'>
                    <Image
                      className='text-zinc-950'
                      src='/icon-play.svg'
                      alt='Assistir'
                      width={12}
                      height={14}
                    />
                    Assistir
                  </Link>
                </Button>

                <Button className='size-10 bg-transparent hover:bg-transparent border border-zinc-50 rounded-full p-2 transition-all hover:opacity-60'>
                  <PlusIcon className='text-zinc-50' />
                </Button>

                <Button className='size-10 bg-transparent hover:bg-transparent border border-zinc-50 rounded-full p-2 transition-all hover:opacity-60'>
                  <ThumbsUpIcon className='text-zinc-50' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DETAILS */}
      <div className='px-5 space-y-6'>
        <ul className='flex items-center gap-4 font-semibold'>
          {/* RELEVÂNCIA */}
          {serie.vote_average && (
            <li className='text-green-400'>{`${formatRating(serie.vote_average)}% relevante`}</li>
          )}

          {/* ANO DE LANÇAMENTO */}
          {firstDate && <li>{firstDate}</li>}

          {/* DURAÇÃO */}
          {serie.number_of_seasons > 0 && (
            <li>{`${serie.number_of_seasons} temporada${serie.number_of_seasons ? 's' : ''}`}</li>
          )}

          <li className='text-xs leading-none uppercase px-1.5 py-1 rounded border border-zinc-50'>
            HD
          </li>
        </ul>

        {/* GRID */}
        <div className='grid grid-cols-2 gap-4'>
          {/* LEFT */}
          <ul className='space-y-4'>
            {/* GENRES */}
            {allGenres && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Gêneros:</h3>
                <p className='font-normal max-w-xl text-zinc-400'>
                  {allGenres}
                </p>
              </li>
            )}

            {/* SINOPSE */}
            {serie.overview && (
              <li className='space-y-1'>
                <h3 className='font-semibold'>Sinópse:</h3>
                <p className='font-normal max-w-xl text-zinc-400'>
                  {serie.overview}
                </p>
              </li>
            )}
          </ul>

          {/* RIGHT */}
          <ul className='space-y-4'>
            {/* PRODUTION */}
            {prodution && (
              <li className='flex items-start gap-2'>
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

            {/* DATA DO ÚLTIMO LANÇAMENTO */}
            {lastDate && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Último lançamento:</h3>
                <p className='font-normal text-zinc-400'>{lastDate}</p>
              </li>
            )}

            {/* EPSÓDIOS */}
            {serie.number_of_episodes > 0 && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Total de EP:</h3>
                <p className='font-normal text-zinc-400'>
                  {serie.number_of_episodes} episódios
                </p>
              </li>
            )}

            {/* CRIADOR DA SERIE */}
            {nameCreatedBy && (
              <li className='flex items-center gap-2'>
                <h3 className='font-semibold'>Criador(a):</h3>
                <p className='font-normal text-zinc-400'>{nameCreatedBy}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default SerieItemPage
