'use client'
import { CustomButton } from './CustomButton'

interface EmptyStateProps {
  title: string
  message: string
  buttonLabel?: string
  buttonAction?: () => void
}

export const EmptyState = ({
  title,
  message,
  buttonLabel,
  buttonAction
}: EmptyStateProps) => {
  return (
    <div className='text-center p-6'>
      <h2 className='text-lg font-bold mb-2'>{title}</h2>
      <p className='text-sm text-gray-500 mb-4'>{message}</p>
      {buttonLabel && (
        <CustomButton title={buttonLabel} onClick={buttonAction} />
      )}
    </div>
  )
}
