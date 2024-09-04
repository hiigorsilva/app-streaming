import { ReactNode } from 'react'

type ContainerBannerIdProps = {
  children: ReactNode
}

export const ContainerBannerId = ({ children }: ContainerBannerIdProps) => {
  return (
    <div className='w-full h-full bg-gradient-to-t from-zinc-950 via-zinc-950/80 via-25% to-zinc-950/5 to-70%'>
      {children}
    </div>
  )
}
