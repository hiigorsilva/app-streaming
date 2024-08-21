import { Movie } from '@/types/Movie'
import Image from 'next/image'

type MovieProps = {
  movie: Movie
}

export const MovieItem = ({ movie }: MovieProps) => {
  return (
    <li
      key={movie.id}
      className='relative min-w-48 min-h-72 cursor-pointer transition scale-95 hover:scale-100'
    >
      <Image
        className={`w-full h-full object-cover rounded`}
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`${movie.original_name}`}
        fill
      />
    </li>
  )
}
