'use client'

import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { formatRating } from '@/functions/formatRating'
import { useFeatureMovie } from '@/utils/queries'
import { CircleAlertIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { data: serie, isLoading, error } = useFeatureMovie()

  if (!serie) return
  if (isLoading) return <Loading />
  if (error)
    return <ErrorComponent>Erro ao carregar filme destaque.</ErrorComponent>

  const firstDate = new Date(serie.first_air_date).getFullYear()

  return (
    <>
      <section>
        <div className='relative h-[90dvh] w-full'>
          {/* IMAGEM */}
          <Image
            className='w-full h-full object-cover -z-10'
            src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
            alt={serie.name || serie.original_name}
            fill
            priority
          />

          {/* BANNER */}
          <div className='w-full h-full bg-gradient-to-t from-zinc-950 to-zinc-950/5 to-60%'>
            <div className='w-full h-full flex items-center bg-gradient-to-r from-zinc-950/95 from-30% to-zinc-950/5 to-60% px-5 py-20'>
              <div className='max-w-xl w-full flex flex-col gap-4'>
                {/* INFO */}
                <ul className='flex items-center gap-6'>
                  {/* TAG */}
                  <li className='flex items-center gap-2'>
                    <Image
                      src='/simbol-netflix.svg'
                      alt='Série Netflix'
                      width={10}
                      height={20}
                    />
                    <span className='font-semibold text-xs text-zinc-200 uppercase tracking-[4px]'>
                      Série
                    </span>
                  </li>

                  {/* RELEVÂNCIA */}
                  {serie.vote_average && (
                    <li className='font-semibold text-sm text-green-400'>{`${formatRating(serie.vote_average)}% relevante`}</li>
                  )}

                  {/* DATE */}
                  {firstDate && (
                    <li className='font-semibold text-sm'>{firstDate}</li>
                  )}
                </ul>

                {/* TITLE */}
                <h1 className='font-semibold text-5xl'>
                  {serie.name || serie.original_name}
                </h1>

                {/* OVERVIEW */}
                <p className='text-zinc-400 line-clamp-3'>{serie.overview}</p>

                {/* BUTTON ACTIONS */}
                <div className='flex items-center gap-3'>
                  {/* PLAY */}
                  <Button
                    className='flex items-center gap-2 max-w-48 w-full font-semibold text-sm rounded'
                    asChild
                  >
                    <Link href='https://www.netflix.com/' target='_blank'>
                      <Image
                        className='text-zinc-950'
                        src='/icon-play.svg'
                        alt='Assistir'
                        width={12}
                        height={14}
                      />
                      Assistir
                    </Link>
                  </Button>

                  {/* VER DETALHES */}
                  <Button
                    className='flex items-center gap-2 max-w-48 w-full font-semibold text-sm text-zinc-50 border border-zinc-800/50 rounded bg-zinc-900/80 hover:bg-zinc-800'
                    asChild
                  >
                    <Link href={`/series/${serie.id}`}>
                      <CircleAlertIcon size={18} />
                      Mais informações
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
