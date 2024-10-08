import { Media } from './Media'
import { Movie } from './Movie'
import { Serie } from './Serie'

export type MovieResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type SerieResponse = {
  page: number
  results: Serie[]
  total_pages: number
  total_results: number
}

export type MultiMediaResponse = {
  page: number
  results: Media[]
  total_pages: number
  total_results: number
}
