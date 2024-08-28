import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from '../ui/button'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export const ButtonIcon = ({ children, ...props }: ButtonIconProps) => {
  return (
    <Button
      className='rounded-full size-10 bg-transparent border border-zinc-50 transition-all hover:bg-transparent hover:opacity-75'
      size='icon'
      {...props}
    >
      {children}
    </Button>
  )
}
