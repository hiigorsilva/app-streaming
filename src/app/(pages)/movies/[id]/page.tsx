'use client'

import { FeatureMovieDescription } from '@/components/FeatureMovie/FeatureMovieDescription'
import { FeatureMovieInfo } from '@/components/FeatureMovie/FeatureMovieInfo'
import { FeatureMovieTitle } from '@/components/FeatureMovie/FeatureMovieTitle'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { formatCurrencyToBRL } from '@/functions/formatCurrency'
import { formatterNumber } from '@/functions/formatNumber'
import { formatRating } from '@/functions/formatRating'
import { formatTimeDuration } from '@/functions/formatTimeDuration'
import { useMovieInfo } from '@/utils/queries'
import Image from 'next/image'
import Link from 'next/link'

type MovieDetailsPageProps = {
  params: {
    id: number
  }
}

const MovieDetailsPage = ({ params }: MovieDetailsPageProps) => {
  const movieId = params.id
  const { data: movie, isLoading, error } = useMovieInfo(movieId)

  if (isLoading) return <Loading />
  if (error || !movie) return <div>Erro ao buscar informações do filme.</div>

  const firstDate = new Date(movie.release_date)
  // const genres = movie.genres.map((genre) => genre.name).join(', ')
  const prodCompanies = movie.production_companies
    .map((prod) => prod.name)
    .join(', ')

  return (
    <>
      <div className='relative h-dvh w-full'>
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
        <div className='w-full h-full bg-gradient-to-t from-zinc-950/90 sm:from-zinc-950 from-40% sm:from-10% to-transparent to-70% sm:to-40%'>
          <div className='w-full h-full flex items-end sm:items-center bg-transparent sm:bg-gradient-to-r from-zinc-950/90 from-50% md:from-30% to-transparent to-80% md:to-55%'>
            {/* HEADLINE + INFO + ACTION */}
            <div className='max-w-none w-full sm:max-w-xl text-center sm:text-left space-y-4 p-5 mb-36 sm:mb-0'>
              {/* TÍTULO */}
              <FeatureMovieTitle>
                {movie?.title || movie.original_name}
              </FeatureMovieTitle>

              {/* INFO DO FILME */}
              <FeatureMovieInfo>
                <li className='text-green-400'>
                  {formatRating(Number(movie.vote_average))}% relevante
                </li>
                <li>{firstDate.getFullYear()}</li>
                <li className='font-normal text-xs -tracking-tighter uppercase py-px px-1.5 rounded border border-zinc-400'>
                  HD
                </li>
              </FeatureMovieInfo>

              {/* DESCRIÇÃO */}
              {movie.overview && (
                <FeatureMovieDescription>
                  {movie.overview}
                </FeatureMovieDescription>
              )}

              {/* BOTÃO */}
              <div className='flex items-center gap-4 w-fit sm:w-full mx-auto sm:mx-0'>
                <Button
                  className='flex items-center gap-2 max-w-xs w-full font-semibold rounded text-zinc-950 bg-zinc-50 hover:bg-zinc-50/75'
                  asChild
                >
                  <Link href={movie.homepage} target='_blank'>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div className='w-fit h-fit px-5 py-8'>
        <ul className='space-y-1'>
          <li className='font-normal text-sm text-zinc-400 p-2 bg-zinc-900/50 rounded'>
            <span className='block font-semibold text-zinc-50'>Produção: </span>
            {prodCompanies}
          </li>

          <li className='font-normal text-sm text-zinc-400 p-2 bg-zinc-900/50 rounded'>
            <span className='block font-semibold text-zinc-50'>
              Orçamento:{' '}
            </span>
            {formatCurrencyToBRL(movie.budget)}
          </li>

          <li className='font-normal text-sm text-zinc-400 p-2 bg-zinc-900/50 rounded'>
            <span className='block font-semibold text-zinc-50'>Receita: </span>
            {formatCurrencyToBRL(movie.revenue)}
          </li>

          <li className='font-normal text-sm text-zinc-400 p-2 bg-zinc-900/50 rounded'>
            <span className='block font-semibold text-zinc-50'>Duração: </span>
            {formatTimeDuration(movie.runtime)}
          </li>

          <li className='font-normal text-sm text-zinc-400 p-2 bg-zinc-900/50 rounded'>
            <span className='block font-semibold text-zinc-50'>Avaliação:</span>
            Mais de {formatterNumber(movie.vote_count)} pessoas avaliaram este
            filme.
          </li>
        </ul>
      </div>
    </>
  )
}
export default MovieDetailsPage
