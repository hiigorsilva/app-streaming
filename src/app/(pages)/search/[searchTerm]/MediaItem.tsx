import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Media } from '@/types/Media'
import Image from 'next/image'

type MovieItemProps = {
  media: Media
}

export const MediaItem = ({ media }: MovieItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <li className='relative min-w-40 md:min-w-48 w-full min-h-60 md:min-h-72 h-full cursor-pointer transition scale-95 hover:scale-100'>
            <Image
              className={`w-full h-full object-cover rounded`}
              src={
                media.poster_path
                  ? `https://image.tmdb.org/t/p/w300${media.poster_path}`
                  : '/image-not-found.webp'
              }
              alt={media.title || media.original_title}
              width={300}
              height={450}
              priority
              draggable={false}
            />
          </li>
        </TooltipTrigger>

        <TooltipContent className='bg-zinc-800 border border-zinc-700/80 rounded'>
          {media.title || media.original_title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
