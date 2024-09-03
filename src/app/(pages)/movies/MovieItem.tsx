import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Movie } from '@/types/Movie'
import Image from 'next/image'

type MovieItemProps = {
  movie: Movie
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <li className='relative min-w-40 md:min-w-48 w-full min-h-60 md:min-h-72 h-full cursor-pointer transition scale-95 hover:scale-100'>
            <Image
              className={`w-full h-full object-cover rounded`}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || movie.original_title}
              width={300}
              height={450}
              priority
              draggable={false}
            />
          </li>
        </TooltipTrigger>

        <TooltipContent className='bg-zinc-800 border border-zinc-700/80 rounded'>
          {movie.title || movie.original_title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
