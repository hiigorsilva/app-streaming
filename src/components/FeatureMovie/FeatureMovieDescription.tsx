import { ReactNode } from 'react'

type FeatureMovieDescriptionProps = {
  children: ReactNode
}
export const FeatureMovieDescription = ({
  children,
}: FeatureMovieDescriptionProps) => {
  return (
    <p className='hidden sm:block text-lg text-zinc-300 md:text-zinc-400 line-clamp-3'>
      {children}
    </p>
  )
}
