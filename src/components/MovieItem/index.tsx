import { Movie } from '@/types/Movie'
import Image from 'next/image'
import Link from 'next/link'

type MovieProps = {
  movie: Movie
}

export const MovieItem = ({ movie }: MovieProps) => {
  return (
    <li
      key={movie.id}
      className='relative min-w-40 md:min-w-48 min-h-60 md:min-h-72 cursor-pointer transition scale-95 hover:scale-100'
    >
      <Link href={`/movies/${movie.id}`}>
        <Image
          className={`w-full h-full object-cover rounded`}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`${movie.original_name}`}
          width={300}
          height={450}
          priority
          draggable={false}
        />
      </Link>
    </li>
  )
}
