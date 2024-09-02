import { api } from '@/service/api'
import { SerieResponse } from '@/types/MovieResponse'
import { Serie } from '@/types/Serie'

// SERIES PAGE
export const fetchSeries = async (): Promise<Serie[]> => {
  const response = await api.get<SerieResponse>('tv/top_rated')
  return response.data.results
}
