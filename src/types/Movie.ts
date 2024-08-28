export type Movie = {
  id: number
  title: string
  name: string
  original_name: string
  overview: string
  homepage: string
  poster_path: string
  backdrop_path: string
  production_companies: ProductionCompany[]
  number_of_seasons?: number
  first_air_date: string
  release_date: string
  last_air_date: string
  budget: number
  revenue: number
  runtime: number
  genres: Genre[]
  spoken_languages: Languages[]
  adult: boolean
  tagline: string
  vote_average: number
  vote_count: number
}

type Genre = {
  id: number
  name: string
}

type Languages = {
  name: string
  english_name: string
}

type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
