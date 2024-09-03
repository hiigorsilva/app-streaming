'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useSearchMovie } from '@/queries/queries'
import Link from 'next/link'
import { formatStringDecode } from '@/functions/formatStringDecode'
import { MediaItem } from './MediaItem'

type SearchPageProps = {
  params: {
    searchTerm: string
  }
}

const SearchTermPage = ({ params }: SearchPageProps) => {
  const { searchTerm } = params

  const { data: medias, isLoading, error } = useSearchMovie(searchTerm)

  if (!medias) return
  if (isLoading) return <Loading />
  if (error)
    return <ErrorComponent>Erro ao carregar filmes e séries.</ErrorComponent>

  return (
    <section className='mt-[72px] pt-4 space-y-6'>
      {/* NENHUM RESULTDO ENCONTRADO */}
      {medias.length === 0 && (
        <div className='px-5 space-y-3'>
          <h1 className='font-semibold text-2xl text-zinc-200'>
            Nenhum resultado encontrado.
          </h1>
        </div>
      )}

      {medias.length > 0 && (
        <>
          {/* TITLE */}
          <div className='px-5 space-y-3'>
            {/* RESULTADO ENCONTRADO */}
            <h2 className='font-semibold text-3xl text-zinc-200'>Filmes</h2>
            <p className='text-sm space-x-2'>
              <span>Você buscou por:</span>
              <span className='font-semibold text-zinc-400 uppercase'>
                {formatStringDecode(searchTerm)}
              </span>
            </p>
          </div>

          {/* GRID MEDIAS */}
          <ContainerGrid>
            {medias.map((media) => (
              <Link
                key={media.id}
                href={
                  media.media_type === 'movie'
                    ? `/movies/${media.id}`
                    : `/series/${media.id}`
                }
              >
                <MediaItem media={media} />
              </Link>
            ))}
          </ContainerGrid>
        </>
      )}
    </section>
  )
}

export default SearchTermPage
