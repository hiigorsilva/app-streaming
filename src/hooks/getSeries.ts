import { api } from '@/service/api'
import { Movie } from '@/types/Movie'
import { MovieResponse } from '@/types/MovieResponse'

export const fetchSeries = async (): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>('tv/top_rated')
  return response.data.results
}
