export type MovieCategory = {
  title: string
  endpoint: string
}

// MOVIE CATEGORIES
export const endpoints: MovieCategory[] = [
  {
    title: 'Em Alta',
    endpoint: 'movie/top_rated',
  },
  {
    title: 'Recomendados para Você',
    endpoint: 'trending/all/week',
  },
  {
    title: 'Ação',
    endpoint: 'discover/movie?with_genres=28',
  },
  {
    title: 'Comédia',
    endpoint: 'discover/movie?with_genres=35',
  },
  {
    title: 'Crime',
    endpoint: 'discover/movie?with_genres=80',
  },
  {
    title: 'Guerra',
    endpoint: 'discover/movie?with_genres=10752',
  },
  {
    title: 'Ficção científica',
    endpoint: 'discover/movie?with_genres=878',
  },
  {
    title: 'Terror',
    endpoint: 'discover/movie?with_genres=27',
  },
  {
    title: 'Romance',
    endpoint: 'discover/movie?with_genres=10749',
  },
]
