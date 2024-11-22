import { MenuItemType } from '@/types/Menu'
import { DollarSign, Utensils } from 'lucide-react'

const menuItems: MenuItemType[] = [
  {
    icon: Utensils,
    label: 'Cantinas',
    href: () => `/canteens`,
    tooltip: 'Gerencie as cantinas da sua instituição.'
  },
  {
    icon: DollarSign,
    label: 'Sales',
    href: (id: string) => `/sales/${id}`,
    tooltip: 'Visualize o desempenho de vendas da cantina.'
  }
]

export { menuItems }
