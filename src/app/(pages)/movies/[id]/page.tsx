'use client'

import { ButtonIcon } from '@/components/ButtonIcon'
import { FeatureMovieTitle } from '@/components/FeatureMovie/FeatureMovieTitle'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { formatCurrencyToBRL } from '@/functions/formatCurrency'
import { formatterNumber } from '@/functions/formatNumber'
import { formatRating } from '@/functions/formatRating'
import { formatTimeDuration } from '@/functions/formatTimeDuration'
import { useMovieInfo } from '@/utils/queries'
import { PlusIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type MovieDetailsPageProps = {
  params: {
    id: number
    type: 'movie' | 'tv'
  }
}

const MovieDetailsPage = ({ params }: MovieDetailsPageProps) => {
  const movieId = params.id
  const type = params.type

  const { data: movie, isLoading, error } = useMovieInfo(movieId, type)

  if (isLoading) return <Loading />
  if (error || !movie) return <div>Erro ao buscar informações do filme.</div>

  const movieDate = new Date(movie.release_date).getFullYear()
  const tvDate = new Date(movie.first_air_date).getFullYear()

  const genres = movie.genres.map((genre) => genre.name).join(', ')
  const languages = movie.spoken_languages
    .map((lang) => lang.english_name || lang.name)
    .join(', ')
  const prodCompanies = movie.production_companies
    .map((prod) => prod.name)
    .join(', ')

  return (
    <>
      {/* CAPA DE DESTAQUE */}
      <div className='relative h-[90dvh] w-full'>
        {/* CAPA DO FILME */}
        <Image
          className='object-cover w-full h-full -z-[1]'
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={`${movie.original_name}`}
          priority
          fill
          draggable={false}
        />
        {/* INFORMAÇÕES */}
        <div className='w-full h-full flex items-end bg-gradient-to-t from-zinc-950/90 sm:from-zinc-950 from-40% sm:from-10% to-transparent to-70% sm:to-60%'>
          {/* HEADLINE + INFO + ACTION */}
          <div className='max-w-none w-full sm:max-w-xl text-center sm:text-left space-y-4 p-5 mb-36 sm:mb-0'>
            {/* TÍTULO */}
            <div className='space-y-1'>
              <FeatureMovieTitle>
                {movie.name || movie.title || movie.original_name}
              </FeatureMovieTitle>

              {/* TAGLINE */}
              {movie.tagline && (
                <p className='text-zinc-400 line-clamp-3'>{movie.tagline}</p>
              )}
            </div>

            {/* BOTÃO */}
            <div className='flex items-center gap-4 w-fit sm:w-full mx-auto sm:mx-0'>
              <Button
                className='flex items-center gap-2 max-w-xs w-full font-semibold rounded text-zinc-950 bg-zinc-50 hover:bg-zinc-50/75'
                asChild
              >
                <Link
                  href={movie.homepage || `https://www.netflix.com/browse`}
                  target='_blank'
                >
                  <div className='relative h-[14px] w-[14px]'>
                    <Image
                      className='h-[14px] w-auto object-contain'
                      src='/icon-play.svg'
                      alt='Ícone de play'
                      fill
                    />
                  </div>
                  Assistir
                </Link>
              </Button>

              <ButtonIcon disabled>
                <PlusIcon className='text-zinc-50' size={20} />
              </ButtonIcon>

              <ButtonIcon disabled>
                <ThumbsUpIcon className='text-zinc-50' size={20} />
              </ButtonIcon>

              <ButtonIcon disabled>
                <ThumbsDownIcon className='text-zinc-50' size={20} />
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>

      {/* DETALHES DO FILME */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 p-5'>
        <ul className='space-y-4'>
          <li className='flex items-center gap-3 font-semibold'>
            <span className='text-green-500'>{`${formatRating(Number(movie.vote_average))}% relevante`}</span>
            <span>{movieDate || tvDate}</span>
            <span className='flex justify-between items-center w-fit h-fit text-xs py-px px-1.5 rounded border border-zinc-200'>
              HD
            </span>
          </li>

          <li className='flex gap-1.5'>
            <h3 className='font-semibold text-zinc-50'>Gêneros: </h3>
            {genres && <p className='text-zinc-400'>{genres}</p>}
            {!genres && (
              <p className='text-zinc-400'>
                Nenhum gênero foi adicionado a esta obra.
              </p>
            )}
          </li>

          {movie.overview && (
            <li className='max-w-lg w-full flex-1'>
              <h3 className='font-semibold text-zinc-50'>Sinópse: </h3>
              <p className='font-normal text-zinc-400'>{movie.overview}</p>
            </li>
          )}
        </ul>

        <ul className='space-y-4'>
          {prodCompanies && (
            <li className='flex flex-col md:flex-row gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Produção:</h3>
              <p className='font-normal text-zinc-400'>{prodCompanies}</p>
            </li>
          )}

          {movie.number_of_seasons && (
            <li className='flex gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Temporadas:</h3>
              <p className='font-normal text-zinc-400'>
                {movie.number_of_seasons}
              </p>
            </li>
          )}

          {movie.runtime > 0 && (
            <li className='flex gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Duração: </h3>
              <p className='text-zinc-400'>
                {formatTimeDuration(movie.runtime)}
              </p>
            </li>
          )}

          {languages && (
            <li className='flex gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Idioma:</h3>
              <p className='text-zinc-400'>{languages}</p>
            </li>
          )}

          {movie.budget > 0 && (
            <li className='flex gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Orçamento: </h3>
              <p className='text-zinc-400'>
                {formatCurrencyToBRL(movie.budget)}
              </p>
            </li>
          )}

          {movie.revenue > 0 && (
            <li className='flex gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Receita: </h3>
              <p className='text-zinc-400'>
                {formatCurrencyToBRL(movie.revenue)}
              </p>
            </li>
          )}

          {movie.vote_count > 0 && (
            <li className='flex gap-1.5'>
              <h3 className='font-semibold text-zinc-50'>Avaliação:</h3>
              <p className='text-zinc-400'>
                Mais de {formatterNumber(movie.vote_count)} avaliações feitas.
              </p>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
export default MovieDetailsPage
