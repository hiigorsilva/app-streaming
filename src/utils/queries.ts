'use client'

import { useQuery } from '@tanstack/react-query'
import { CategoryData, fetchCategories } from '@/hooks/useGetCategories'

export const useCategories = () => {
  return useQuery<CategoryData[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}
