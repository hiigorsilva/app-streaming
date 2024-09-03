import { api } from '@/service/api'
import { Movie } from '@/types/Movie'
import { MovieResponse } from '@/types/MovieResponse'

// EM BREVE
export const fetchUpComing = async (): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>('movie/upcoming')
  return response.data.results
}
