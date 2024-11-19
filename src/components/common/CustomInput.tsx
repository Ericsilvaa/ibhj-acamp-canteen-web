import { Input } from '@/components/ui/input'
import { CustomInputProps } from '@/types/forms/Input'

export const CustomInput = ({
  label,
  value,
  placeholder = '',
  type = 'text',
  className = '',
  ...props
}: CustomInputProps) => (
  <div className={`mb-4 ${className}`}>
    <label className='block text-sm font-medium mb-2'>{label}</label>
    <Input
      type={type}
      value={value}
      onChange={props.onChange}
      placeholder={placeholder}
      className='w-full'
      {...props}
    />
  </div>
)
