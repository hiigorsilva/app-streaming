import { api } from '@/service/api'
import { endpoints } from '@/service/listCategories'
import { Movie } from '@/types/Movie'
import { MovieResponse } from '@/types/MovieResponse'

export type CategoryData = {
  title: string
  movies: Movie[]
}

export const fetchCategories = async (): Promise<CategoryData[]> => {
  const requestCategories = endpoints.map((category) =>
    api.get<MovieResponse>(category.endpoint)
  )
  const responses = await Promise.all(requestCategories)

  return responses.map((response, index) => ({
    title: endpoints[index].title,
    movies: response.data.results,
  }))
}
