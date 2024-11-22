import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-200 text-gray-900',
        destructive: 'bg-red-500 text-white',
        outline: 'border border-gray-200 text-gray-900',
        secondary: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-black'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
