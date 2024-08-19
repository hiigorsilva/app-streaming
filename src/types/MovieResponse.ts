import { Movie } from './Movie'

export type MovieResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
