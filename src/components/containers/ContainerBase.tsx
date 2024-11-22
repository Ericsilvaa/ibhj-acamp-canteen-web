import { ReactNode } from 'react'

export type MaxWidthType =
  | 'max-w-3xl'
  | 'max-w-2xl'
  | 'max-w-xl'
  | 'max-w-lg'
  | 'max-w-md'
  | 'max-w-sm'

interface ContainerProps {
  children: ReactNode
  maxWidth?: MaxWidthType
  className?: string
}

export const ContainerBase = ({
  children,
  maxWidth = 'max-w-xl',
  className = ''
}: ContainerProps) => {
  return (
    <div className={`${maxWidth} mx-auto p-6 space-y-6 ${className}`}>
      {children}
    </div>
  )
}
