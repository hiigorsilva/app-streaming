import { api } from '@/service/api'
import { Movie } from '@/types/Movie'

export const fetchMovieToprated = async () => {
  const response = await api.get<Movie>('movie/top_rated')
  return response.data
}
