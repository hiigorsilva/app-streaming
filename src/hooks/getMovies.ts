import { api } from '@/service/api'
import { Movie } from '@/types/Movie'
import { MovieResponse } from '@/types/MovieResponse'

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>('movie/top_rated')
  return response.data.results
}

// INFANTIL
export const fetchMovieInfantil = async (): Promise<Movie[]> => {
  const response = await api.get<MovieResponse>('discover/movie?with_genres=16')
  return response.data.results
}
