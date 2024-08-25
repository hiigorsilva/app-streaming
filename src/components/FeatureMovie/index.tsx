import { formatRating } from '@/functions/formatRating'
import { Movie } from '@/types/Movie'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { InfoIcon } from 'lucide-react'
import { FeatureMovieTitle } from './FeatureMovieTitle'
import { FeatureMovieInfo } from './FeatureMovieInfo'
import { FeatureMovieDescription } from './FeatureMovieDescription'
import { FeatureMovieGenres } from './FeatureMovieGenres'

interface FeatureMovieProps {
  featureData: Movie
}

export const FeatureMovie = ({ featureData: movie }: FeatureMovieProps) => {
  if (!movie) return
  const firstDate = new Date(movie.first_air_date)
  const genres = movie.genres.map((genre) => genre.name).join(', ')

  return (
    <div className='relative h-dvh w-full'>
      {/* CAPA DO FILME */}
      <Image
        className='object-cover w-full h-full -z-[1]'
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={`${movie?.original_name}`}
        priority
        fill
        draggable={false}
      />
      {/* INFORMAÇÕES */}
      <div className='w-full h-full bg-gradient-to-t from-zinc-950/90 sm:from-zinc-950 from-40% sm:from-10% to-transparent to-70% sm:to-40%'>
        <div className='w-full h-full flex items-end sm:items-center bg-transparent sm:bg-gradient-to-r from-zinc-950/90 from-50% md:from-30% to-transparent to-80% md:to-55%'>
          {/* HEADLINE + INFO + ACTION */}
          <div className='max-w-none w-full sm:max-w-xl text-center sm:text-left space-y-4 p-5 mb-36 sm:mb-0 -mt-28'>
            {/* TÍTULO */}
            <FeatureMovieTitle>
              {movie?.original_name || movie.title}
            </FeatureMovieTitle>

            {/* INFO DO FILME */}
            <FeatureMovieInfo>
              <li className='text-green-400'>
                {formatRating(Number(movie?.vote_average))}% relevante
              </li>
              <li>{firstDate.getFullYear()}</li>
              <li>
                {movie.number_of_seasons} temporada
                {movie.number_of_seasons !== 1 ? 's' : ''}
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
                className='flex items-center gap-2 font-semibold rounded text-zinc-950 bg-zinc-50 hover:bg-zinc-50/75'
                asChild
              >
                <Link href={`/watch/${movie.id}`}>
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
              <Button
                className='flex items-center gap-2 font-semibold rounded transition-all text-zinc-50 bg-zinc-800/80 hover:bg-zinc-800/50'
                asChild
              >
                <Link href={`/movie/${movie.id}`}>
                  <InfoIcon size={18} />
                  Mais informações
                </Link>
              </Button>
            </div>

            {/* GêNEROS */}
            {genres && <FeatureMovieGenres>{genres}</FeatureMovieGenres>}
          </div>
        </div>
      </div>
    </div>
  )
}
