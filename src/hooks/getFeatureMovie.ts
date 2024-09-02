import { api } from '@/service/api'
import { Serie } from '@/types/Serie'
import { SerieResponse } from '@/types/MovieResponse'

// Busca lista de filmes/series em alta
const fetchFeatureMovie = async (): Promise<Serie[]> => {
  const response = await api.get<SerieResponse>('tv/top_rated')
  return response.data.results
}

// Seleciona somente um filme/serie para ser mostrado
export const chooseRandomMovie = async (): Promise<Serie | null> => {
  const movies = await fetchFeatureMovie()
  if (movies.length === 0) return null

  const randomIndex = Math.floor(Math.random() * movies.length)
  return movies[randomIndex]
}
