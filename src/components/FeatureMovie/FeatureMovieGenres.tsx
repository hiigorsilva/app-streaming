import { ReactNode } from 'react'

type FeatureMovieGenresProps = {
  children: ReactNode
}

export const FeatureMovieGenres = ({ children }: FeatureMovieGenresProps) => {
  return (
    <p className='font-semibold text-zinc-50'>
      <span>Gêneros: </span>
      {children}
    </p>
  )
}
