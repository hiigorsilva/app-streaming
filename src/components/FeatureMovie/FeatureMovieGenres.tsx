import { ReactNode } from 'react'

type FeatureMovieGenresProps = {
  children: ReactNode
}

export const FeatureMovieGenres = ({ children }: FeatureMovieGenresProps) => {
  return (
    <p className='text-zinc-400'>
      <span className='font-semibold text-zinc-50'>Gêneros: </span>
      <span>{children}</span>
    </p>
  )
}
