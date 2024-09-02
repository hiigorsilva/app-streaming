import { api } from '@/service/api'
import { endpoints } from '@/service/listCategories'
import { MovieResponse } from '@/types/MovieResponse'

export const fetchAllCategories = async () => {
  const requests = endpoints.map((category) =>
    api.get<MovieResponse>(category.endpoint)
  )

  const responses = await Promise.all(requests)
  return responses.map((response, index) => ({
    title: endpoints[index].title,
    movies: response.data.results,
  }))
}
