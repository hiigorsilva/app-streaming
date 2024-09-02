'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useSeries, useSeriesPrefetch } from '@/utils/queries'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SeriesPage = () => {
  useSeriesPrefetch()
  const { data: series, isFetching, error } = useSeries()
  const pathname = usePathname()

  if (!series) return
  if (isFetching) return <Loading />
  if (error) return <ErrorComponent>Erro ao carregar séries.</ErrorComponent>

  return (
    <section className='mt-[72px] pt-4 space-y-4'>
      <h2 className='font-semibold text-3xl px-5'>Séries</h2>

      <ContainerGrid>
        {series.map((serie) => (
          <Link key={serie.id} href={`${pathname}/${serie.id}`}>
            <li className='relative min-w-40 md:min-w-48 w-full min-h-60 md:min-h-72 h-full cursor-pointer transition scale-95 hover:scale-100'>
              <Image
                className={`w-full h-full object-cover rounded`}
                src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
                alt={serie.title || serie.original_title}
                width={300}
                height={450}
                priority
                draggable={false}
              />
            </li>
          </Link>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default SeriesPage
