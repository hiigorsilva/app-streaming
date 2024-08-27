import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

interface FeatureMovieDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}
export const FeatureMovieDescription = ({
  className,
  children,
  ...props
}: FeatureMovieDescriptionProps) => {
  return (
    <p
      className={cn(
        `hidden sm:block text-lg text-zinc-200 md:text-zinc-400 sm:line-clamp-3`,
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
