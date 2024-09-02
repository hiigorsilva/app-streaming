import { api } from '@/service/api'
import { Movie } from '@/types/Movie'

// GET MOVIE
export const fetchMovieId = async (id: number) => {
  const response = await api.get<Movie>(`movie/${id}`)
  return response.data
}
