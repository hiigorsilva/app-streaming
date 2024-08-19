import { CategoryData, fetchCategories } from '@/hooks/useGetCategories'
import { useQuery } from '@tanstack/react-query'

export const useCategories = () => {
  return useQuery<CategoryData[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })
}
