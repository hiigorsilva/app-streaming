import { api } from '@/service/api'
import { Movie } from '@/types/Movie'

export const fetchMovieId = async (id: number) => {
  const response = await api.get<Movie>(`movie/${id}`)
  return response.data
}

export const fetchTvId = async (id: number) => {
  const response = await api.get<Movie>(`tv/${id}`)
  return response.data
}
