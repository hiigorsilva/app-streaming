'use client'

import Error from 'next/error'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Movie } from '@/types/Movie'
import { fetchMovieId } from '@/hooks/getMovieId'
import { fetchMovies } from '@/hooks/getMovies'
import { fetchSeries } from '@/hooks/getSeries'
import { fetchSerieId } from '@/hooks/getSerieId'
import { Serie } from '@/types/Serie'

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

// GET MOVIES ID
export const useMovieId = (id: number) => {
  return useQuery<Movie, Error>({
    queryKey: ['movies', id],
    queryFn: () => fetchMovieId(id),
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

// GET SERIE ID
export const useSerieId = (id: number) => {
  return useQuery<Serie, Error>({
    queryKey: ['movies', id],
    queryFn: () => fetchSerieId(id),
  })
}
