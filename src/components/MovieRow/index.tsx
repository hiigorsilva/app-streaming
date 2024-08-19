import { Movie } from '@/types/Movie'
import { MovieItem } from '../MovieItem'

type MovieProps = {
  title: string
  movies: Movie[]
}

export const MovieRow = ({ title, movies }: MovieProps) => {
  return (
    <div className='space-y-1'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <ul className='flex items-center pr-5 overflow-x-auto'>
        {movies.length > 0 &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </ul>
    </div>
  )
}
