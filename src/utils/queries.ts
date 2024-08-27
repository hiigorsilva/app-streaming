'use client'

import { useQuery } from '@tanstack/react-query'
import { CategoryData, fetchCategories } from '@/hooks/getCategories'
import { fetchMovieId } from '@/hooks/getMovieId'
import { Movie } from '@/types/Movie'
import Error from 'next/error'
import { fetchMovieToprated } from '@/hooks/getMovieToprated'

export const useCategories = () => {
  return useQuery<CategoryData[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}

export const useMovieInfo = (id: number) => {
  return useQuery<Movie, Error>({
    queryKey: ['movies', id],
    queryFn: () => fetchMovieId(id),
  })
}

export const useMoviePopulars = () => {
  return useQuery({
    queryKey: ['toprated'],
    queryFn: fetchMovieToprated,
  })
}
