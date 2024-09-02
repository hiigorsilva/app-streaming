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
    title: 'Animação',
    endpoint: 'discover/movie?with_genres=16',
  },
  {
    title: 'Crime',
    endpoint: 'discover/movie?with_genres=80',
  },
  {
    title: 'Comédia',
    endpoint: 'discover/movie?with_genres=35',
  },
  {
    title: 'Documentários',
    endpoint: 'discover/movie?with_genres=99',
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
