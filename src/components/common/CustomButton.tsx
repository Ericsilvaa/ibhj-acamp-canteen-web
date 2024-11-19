import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CustomButtonProps } from '@/types/forms/Button'

export const CustomButton = ({
  title,
  className,
  variant = 'primary',
  loading = false,
  icon,
  disabled,
  ...props
}: CustomButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded text-sm font-medium'
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100'
  }

  return (
    <Button
      className={cn(
        baseClasses,
        variants[variant],
        loading && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className='flex items-center gap-2'>
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </div>
      )}
    </Button>
  )
}
