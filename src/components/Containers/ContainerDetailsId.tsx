import { ReactNode } from 'react'

type ContainerDetailsIdProps = {
  children: ReactNode
}
export const ContainerDetailsId = ({ children }: ContainerDetailsIdProps) => {
  return <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{children}</div>
}
