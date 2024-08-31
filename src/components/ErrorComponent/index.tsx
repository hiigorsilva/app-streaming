import { ReactNode } from 'react'

type ErrorProps = {
  children: ReactNode
}

export const ErrorComponent = ({ children }: ErrorProps) => {
  return <div className='w-full h-full px-5 py-4 mt-20'>{children}</div>
}
