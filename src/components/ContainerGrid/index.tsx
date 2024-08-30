import { ReactNode } from 'react'

type ContainerGridProps = {
  children: ReactNode
}

export const ContainerGrid = ({ children }: ContainerGridProps) => {
  return (
    <ul className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-5 -ml-1'>
      {children}
    </ul>
  )
}
