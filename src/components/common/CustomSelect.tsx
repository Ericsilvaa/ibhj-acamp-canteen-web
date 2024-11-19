import { Select, SelectItem } from '@/components/ui/select'
import { CustomSelectProps } from '@/types/forms/Select'
import { SelectContent } from '@radix-ui/react-select'

export const CustomSelect = ({
  label,
  value,
  options,
  onChange,
  className = '',
  ...props
}: CustomSelectProps) => {
  const handleValueChange = (val: string) => {
    if (onChange) {
      const event = {
        target: { value: val }
      } as React.ChangeEvent<HTMLSelectElement>
      onChange(event)
    }
  }

  return (
    <div className={`mb-4 ${className}`}>
      <label className='block text-sm font-medium mb-2'>{label}</label>
      <Select
        value={value}
        onValueChange={handleValueChange}
        // defaultValue={defaultValue}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
