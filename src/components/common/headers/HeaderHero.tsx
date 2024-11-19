import { ReactNode } from 'react'

interface HeaderProps {
  title: string
  action?: ReactNode
  className?: string
}

export const HeaderHero = ({ title, action, className = '' }: HeaderProps) => {
  return (
    <div className={`flex justify-between items-center mb-4 ${className}`}>
      <h1 className='text-2xl font-bold'>{title}</h1>
      {action && <div>{action}</div>}
    </div>
  )
}
