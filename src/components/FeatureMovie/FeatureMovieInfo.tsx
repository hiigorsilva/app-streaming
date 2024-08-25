import { ReactNode } from 'react'

type FeatureMovieInfoProps = {
  children: ReactNode
}
export const FeatureMovieInfo = ({ children }: FeatureMovieInfoProps) => {
  return (
    <ul className='flex items-center gap-4 w-fit sm:w-full font-semibold text-zinc-50 mx-auto sm:mx-0'>
      {children}
    </ul>
  )
}
