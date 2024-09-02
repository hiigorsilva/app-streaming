import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Serie } from '@/types/Serie'
import Image from 'next/image'

type SerieItemProps = {
  serie: Serie
}

export const SerieItem = ({ serie }: SerieItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <li className='relative min-w-40 md:min-w-48 w-full min-h-60 md:min-h-72 h-full cursor-pointer transition scale-95 hover:scale-100'>
            <Image
              className={`w-full h-full object-cover rounded`}
              src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
              alt={serie.name || serie.original_name}
              width={300}
              height={450}
              priority
              draggable={false}
            />
          </li>
        </TooltipTrigger>

        <TooltipContent className='bg-zinc-800 border border-zinc-700/80 rounded'>
          {serie.name || serie.original_name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
