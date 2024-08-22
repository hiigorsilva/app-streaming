import { MovieCategory } from '@/types/MovieCategory'

export const endpoints: MovieCategory[] = [
  {
    slug: 'originals',
    title: 'Originais do Netflix',
    endpoint: '/discover/tv?with_network=213',
  },
  {
    slug: 'trending',
    title: 'Recomendados para Você',
    endpoint: '/trending/all/week',
  },
  {
    slug: 'toprated',
    title: 'Em Alta',
    endpoint: '/movie/top_rated',
  },
  {
    slug: 'action',
    title: 'Ação',
    endpoint: '/discover/movie?with_genres=28',
  },
  {
    slug: 'animation',
    title: 'Animação',
    endpoint: '/discover/movie?with_genres=16',
  },
  {
    slug: 'crime',
    title: 'Crime',
    endpoint: '/discover/movie?with_genres=80',
  },
  {
    slug: 'comedy',
    title: 'Comédia',
    endpoint: '/discover/movie?with_genres=35',
  },
  {
    slug: 'documentary',
    title: 'Documentários',
    endpoint: '/discover/movie?with_genres=99',
  },
  {
    slug: 'horror',
    title: 'Terror',
    endpoint: '/discover/movie?with_genres=27',
  },
  {
    slug: 'romance',
    title: 'Romance',
    endpoint: '/discover/movie?with_genres=10749',
  },
]
