import { api } from '@/service/api'
import { MovieResponse } from '@/types/MovieResponse'

export const fetchSearchMovie = async (search: string) => {
  const response = await api.get<MovieResponse>(`search/movie?query=${search}`)
  return response.data.results
}
