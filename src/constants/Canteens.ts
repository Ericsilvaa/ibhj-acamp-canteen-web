import { CanteenOptionType, CanteenStatusOptionType } from '@/types/Canteens'

const CanteenOptions: CanteenOptionType[] = [
  { value: 'ACAMPAMENTO', label: 'Acampamento' },
  { value: 'MC', label: 'Ministério de Cantina' },
  { value: 'MM', label: 'Ministério de Música' }
]

const CanteenStatusOptions: CanteenStatusOptionType[] = [
  { value: 'active', label: 'Ativa' },
  { value: 'inactive', label: 'Inativa' }
]

export { CanteenOptions, CanteenStatusOptions }
