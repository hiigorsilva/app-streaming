import { api } from '@/service/api'
import { MultiMediaResponse } from '@/types/MovieResponse'

export const fetchSearchMovie = async (search: string) => {
  const response = await api.get<MultiMediaResponse>(
    `search/multi?query=${search}`
  )
  return response.data.results
}
