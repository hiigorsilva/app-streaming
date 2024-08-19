import { Movie } from '@/types/Movie'
import { MovieItem } from '../MovieItem'

type MovieProps = {
  title: string
  movies: Movie[]
}

export const MovieRow = ({ title, movies }: MovieProps) => {
  return (
    <div className='space-y-1'>
      <h2 className='font-semibold text-2xl px-5'>{title}</h2>
      <ul className='flex items-center px-5 overflow-x-auto'>
        {movies.length > 0 &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </ul>
    </div>
  )
}
