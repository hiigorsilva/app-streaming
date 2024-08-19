import { api } from '@/service/api'

export const fetchMovieInfo = async (movieId: string, type: string) => {
  if (!movieId) {
    throw new Error('O ID do filme é obrigatório.')
  }

  if (movieId) {
    switch (type) {
      case 'movie':
        return await api.get(`movie/${movieId}`)
        break
      case 'tv':
        return await api.get(`tv/${movieId}`)
        break
      default:
        return null
    }
  }
}
