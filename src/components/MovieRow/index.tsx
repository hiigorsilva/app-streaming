import { Movie } from '@/types/Movie'
import { MovieItem } from '../MovieItem'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type MovieProps = {
  title: string
  movies: Movie[]
}

export const MovieRow = ({ title, movies }: MovieProps) => {
  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    setScrollX((prev) => {
      const screenWidth = window.innerWidth
      const newScrollX = prev + Math.round(screenWidth / 2)
      return newScrollX > 0 ? 0 : newScrollX
    })
  }

  const handleRightArrow = () => {
    setScrollX((prev): any => {
      const screenWidth = window.innerWidth
      const newScrollX = prev - Math.round(screenWidth / 2)
      const movieListWidth = movies.length * 192
      const maxScrollX = -(movieListWidth - screenWidth + 40)
      return newScrollX < maxScrollX ? maxScrollX : newScrollX
    })
  }

  return (
    <div className='relative z-0 space-y-1 group overflow-x-hidden'>
      <h2 className='font-semibold text-2xl px-5'>{title}</h2>

      {/* ARROW LEFT */}
      <button
        onClick={handleLeftArrow}
        className={`absolute left-0 z-30 w-12 h-72 hidden md:flex items-center bg-zinc-950/80 opacity-100 md:opacity-0 transition-all md:group-hover:opacity-100 duration-300`}
      >
        <ChevronLeft strokeWidth={1.5} size={190} />
      </button>

      {/* ARROW RIGHT */}
      <button
        onClick={handleRightArrow}
        className='absolute right-0 z-30 w-12 h-72 hidden md:flex items-center bg-zinc-950/80 opacity-100 md:opacity-0 transition-all md:group-hover:opacity-100 duration-300'
      >
        <ChevronRight strokeWidth={1.5} size={190} />
      </button>

      <div className='w-full overflow-x-auto'>
        <ul
          className={`w-fit flex items-center px-5 transition-transform duration-300 overflow-x-auto`}
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {movies.length > 0 &&
            movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
        </ul>
      </div>
    </div>
  )
}
