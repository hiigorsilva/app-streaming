import { formatRating } from '@/functions/formatRating'
import { Movie } from '@/types/Movie'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { InfoIcon } from 'lucide-react'

interface FeatureMovieProps {
  featureData: Movie
}

export const FeatureMovie = ({ featureData: movie }: FeatureMovieProps) => {
  const firstDate = new Date(movie.first_air_date)
  const genres = movie.genres.map((genre) => genre.name).join(', ')

  console.log(movie)

  return (
    <div className='relative h-dvh w-full'>
      {/* CAPA DO FILME */}
      <Image
        className='object-cover w-full h-full -z-[1]'
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={`${movie?.original_name}`}
        priority
        fill
      />
      {/* INFORMAÇÕES */}
      <div className='w-full h-full bg-gradient-to-t from-zinc-950 from-10% to-transparent to-40%'>
        <div className='w-full h-full flex items-center bg-gradient-to-r from-zinc-950/95 from-30% to-transparent to-55%'>
          {/* HEADLINE + INFO + ACTION */}
          <div className='max-w-xl p-5 space-y-4 -mt-28'>
            {/* TAG DE SÉRIE */}
            <div className='flex items-center gap-2'>
              <Image
                src='/simbol-netflix.svg'
                alt='Logo da Netflix'
                width={10}
                height={18}
              />
              <span className='font-semibold text-sm text-zinc-400 tracking-[3px] uppercase'>
                Série
              </span>
            </div>

            {/* TÍTULO */}
            <h2 className='font-semibold text-6xl text-zinc-50 leading-tight line-clamp-2'>
              {movie?.original_name}
            </h2>

            {/* INFO DO FILME */}
            <ul className='flex items-center gap-4 font-semibold text-zinc-50'>
              <li className='text-green-400'>
                {formatRating(Number(movie?.vote_average))}% relevante
              </li>
              <li>{firstDate.getFullYear()}</li>
              <li>
                {movie.number_of_seasons} temporada
                {movie.number_of_seasons !== 1 ? 's' : ''}
              </li>
            </ul>

            {/* DESCRIÇÃO */}
            {movie.overview && (
              <p className='text-lg text-zinc-400 line-clamp-3'>
                {movie.overview}
              </p>
            )}

            {/* BOTÃO */}
            <div className='flex items-center gap-4'>
              <Button
                className='flex items-center gap-2 font-semibold rounded text-zinc-950 bg-zinc-50 hover:bg-zinc-50/75'
                asChild
              >
                <Link href={`/watch/${movie.id}`}>
                  <Image
                    src='/icon-play.svg'
                    alt='Ícone de play'
                    width={14}
                    height={14}
                  />
                  Assistir
                </Link>
              </Button>
              <Button
                className='flex items-center gap-2 font-semibold rounded transition-all text-zinc-50 bg-zinc-800 hover:bg-zinc-800/50'
                asChild
              >
                <Link href={`/list/add/${movie.id}`}>
                  <InfoIcon size={18} />
                  Mais informações
                </Link>
              </Button>
            </div>

            {/* GêNEROS */}
            <p className='text-zinc-400 line-clamp-1'>
              <span className='font-semibold text-zinc-50'>Gêneros: </span>
              {genres}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
