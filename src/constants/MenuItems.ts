import { MenuItemType } from '@/types/Menu'
import {
  Boxes,
  DollarSign,
  Home,
  Package,
  ShoppingCart,
  Utensils
} from 'lucide-react'

const menuItems: MenuItemType[] = [
  {
    icon: Home,
    label: 'Dashboard',
    href: (id: string) => `/hub/${id}/dashboard`,
    tooltip: 'Visualize o desempenho da cantina.'
  },
  {
    icon: Utensils,
    label: 'Cantinas',
    href: () => `/canteens`,
    tooltip: 'Gerencie as cantinas da sua instituição.'
  },
  {
    icon: ShoppingCart,
    label: 'Orders',
    href: (id: string) => `/hub/${id}/orders`,
    tooltip: 'Visualize e gerencie os pedidos da cantina.'
  },
  {
    icon: Package,
    label: 'Products',
    href: (id: string) => `/hub/${id}/products`,
    tooltip: 'Gerencie os produtos da cantina.'
  },
  {
    icon: Boxes,
    label: 'Stock',
    href: (id: string) => `/hub/${id}/stock`,
    tooltip: 'Gerencie o estoque da cantina.'
  },
  {
    icon: DollarSign,
    label: 'Sales',
    href: (id: string) => `/sales/${id}`,
    tooltip: 'Visualize o desempenho de vendas da cantina.'
  }
  // {
  //   icon: CreditCard,
  //   label: 'Checkout',
  //   href: (id: string) => `/sales/${id}/checkout`
  // },
]

export { menuItems }
