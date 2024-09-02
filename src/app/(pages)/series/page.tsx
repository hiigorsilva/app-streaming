'use client'

import { ContainerGrid } from '@/components/ContainerGrid'
import { ErrorComponent } from '@/components/ErrorComponent'
import { Loading } from '@/components/Loading'
import { useSeries, useSeriesPrefetch } from '@/queries/queries'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SerieItem } from './SerieItem'

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
            <SerieItem serie={serie} />
          </Link>
        ))}
      </ContainerGrid>
    </section>
  )
}

export default SeriesPage
