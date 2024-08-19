import { formatRating } from '@/functions/formatRating'
import { Movie } from '@/types/Movie'
import Image from 'next/image'
import { Button } from '../ui/button'

interface FeatureMovieProps {
  featureData: Movie
}

export const FeatureMovie = ({ featureData: movie }: FeatureMovieProps) => {
  console.log(movie)
  return (
    <div className='relative h-[90dvh] w-full'>
      {/* CAPA DO FILME */}
      <Image
        className='object-cover w-full h-full -z-[1]'
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={`${movie?.original_name}`}
        priority
        fill
      />
      {/* INFORMAÇÕES */}
      <div className='w-full h-full bg-gradient-to-t from-zinc-950 from-10% to-transparent to-50%'>
        <div className='w-full h-full bg-gradient-to-r from-zinc-950/95 from-30% to-transparent to-60%'>
          <h2 className='font-semibold text-4xl text-zinc-50'>
            {movie?.original_name}
          </h2>
          <ul className='flex items-center gap-4 text-zinc-50'>
            <li>{formatRating(Number(movie?.vote_average))}% relevante</li>
            <li>2034</li>
            <li>
              {movie.number_of_seasons} temporada
              {movie.number_of_seasons !== 1 ? 's' : ''}
            </li>
          </ul>
          <p className='text-zinc-400 line-clamp-3'>{movie.overview}</p>
          <div>
            <Button>Assistir</Button>
            <Button>Mais informações</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
