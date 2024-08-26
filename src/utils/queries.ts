'use client'

import { useQuery } from '@tanstack/react-query'
import { CategoryData, fetchCategories } from '@/hooks/useGetCategories'
import { fetchMovieId } from '@/hooks/useGetMovieId'
import { Movie } from '@/types/Movie'
import Error from 'next/error'

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
