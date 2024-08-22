export type Movie = {
  id: number
  title: string
  name: string
  original_name: string
  overview: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  number_of_seasons?: number
  first_air_date: string
  genres: Genre[]
  adult: boolean
}

type Genre = {
  id: number
  name: string
}
