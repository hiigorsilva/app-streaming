'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { CategoryData, fetchCategories } from '@/hooks/getCategories'
import { fetchMovieId, fetchTvId } from '@/hooks/getMovieId'
import { Movie } from '@/types/Movie'
import Error from 'next/error'
import { fetchMovieFeature } from '@/hooks/getMovieToprated'
import { fetchMovies } from '@/hooks/getMovies'
import { fetchSeries } from '@/hooks/getSeries'

// GET CATEGORIES
export const useCategories = () => {
  return useQuery<CategoryData[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}

// GET MOVIES
export const useMovies = () => {
  return useQuery<Movie[], Error>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  })
}
export const useMoviesPrefetch = async () => {
  const queryClient = useQueryClient() // pega o mesmo provider criado
  return await queryClient.prefetchQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  })
}

// GET SERIES
export const useSeries = () => {
  return useQuery<Movie[], Error>({
    queryKey: ['tv'],
    queryFn: fetchSeries,
  })
}
export const useSeriesPrefetch = async () => {
  const queryClient = useQueryClient() // pega o mesmo provider criado
  return await queryClient.prefetchQuery({
    queryKey: ['tv'],
    queryFn: fetchSeries,
  })
}

export const useMovieInfo = (id: number, type: 'movie' | 'tv') => {
  return useQuery<Movie, Error>({
    queryKey: [type, id],
    queryFn: () => {
      if (type === 'movie') {
        return fetchMovieId(id)
      } else {
        return fetchTvId(id)
      }
    },
  })
}

export const useMovieFeature = () => {
  return useQuery<Movie, Error>({
    queryKey: ['toprated'],
    queryFn: fetchMovieFeature,
  })
}
