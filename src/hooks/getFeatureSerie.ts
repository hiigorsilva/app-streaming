import { api } from '@/service/api'
import { Serie } from '@/types/Serie'
import { SerieResponse } from '@/types/MovieResponse'

// Busca lista de filmes/series em alta
const fetchFeatureSerie = async (): Promise<Serie[]> => {
  const response = await api.get<SerieResponse>('tv/top_rated')
  return response.data.results
}

// Seleciona somente um filme/serie para ser mostrado
export const chooseRandomSerie = async (): Promise<Serie | null> => {
  const series = await fetchFeatureSerie()
  if (series.length === 0) return null

  const randomIndex = Math.floor(Math.random() * series.length)
  return series[randomIndex]
}
