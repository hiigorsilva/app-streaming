import { api } from '@/service/api'
import { Serie } from '@/types/Serie'

// GET SERIE
export const fetchSerieId = async (id: number) => {
  const response = await api.get<Serie>(`tv/${id}`)
  return response.data
}
