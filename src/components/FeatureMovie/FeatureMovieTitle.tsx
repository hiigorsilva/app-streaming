import { ReactNode } from 'react'

type FeatureMovieTitleProps = {
  children: ReactNode
}
export const FeatureMovieTitle = ({ children }: FeatureMovieTitleProps) => {
  return (
    <h2 className='font-semibold text-4xl text-center sm:text-left md:text-5xl text-zinc-50 leading-tight md:leading-tight line-clamp-2'>
      {children}
    </h2>
  )
}
