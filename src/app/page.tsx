'use client'

import { FeatureMovie } from '@/components/FeatureMovie'
import { MovieRow } from '@/components/MovieRow'
import { fetchMovieInfo } from '@/hooks/useGetMovieInfo'
import { Movie } from '@/types/Movie'
import { useCategories } from '@/utils/queries'
import { useEffect, useState } from 'react'

// type CategoryData = {
//   title: string
//   movies: Movie[]
// }

export default function Home() {
  const { data: categories, isLoading, error } = useCategories()
  const [featureData, setFeatureData] = useState<Movie | null>(null)

  useEffect(() => {
    const loadFeatureMovie = async () => {
      if (categories) {
        const originalsNetflix = categories[0].movies.length - 1
        const randomChosen = Math.floor(Math.random() * originalsNetflix)
        const movieChosen = categories[0].movies[randomChosen]
        const MovieChosenInfo = await fetchMovieInfo(
          movieChosen.id.toString(),
          'tv'
        )
        setFeatureData(MovieChosenInfo?.data)
      }
    }
    loadFeatureMovie()
  }, [categories])

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro ao buscar categorias de filmes.</div>

  return (
    <>
      {/* FILME EM DESTAQUE */}
      {featureData && (
        <section>
          <FeatureMovie featureData={featureData} />
        </section>
      )}

      {/* CATEGORIAS DE FILME */}
      <section className='space-y-8 pl-5'>
        {categories?.map((category, index) => (
          <MovieRow
            key={index}
            title={category.title}
            movies={category.movies}
          />
        ))}
      </section>
    </>
  )
}
