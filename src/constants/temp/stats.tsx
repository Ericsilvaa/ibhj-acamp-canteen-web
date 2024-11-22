import { BarChart, DollarSign, ShoppingCart, Users } from 'lucide-react'

const stats = [
  {
    title: 'Vendas Totais',
    value: 'R$ 45.231,89',
    icon: <DollarSign />,
    description: '+20.1% em relação ao mês anterior'
  },
  {
    title: 'Novos Clientes',
    value: '+2350',
    icon: <Users />,
    description: '+180.1% em relação ao mês anterior'
  },
  {
    title: 'Produtos Vendidos',
    value: '+12,234',
    icon: <ShoppingCart />,
    description: '+19% em relação ao mês anterior'
  },
  {
    title: 'Lucro',
    value: 'R$ 15.231,89',
    icon: <BarChart />,
    description: '+4% em relação ao mês anterior'
  }
]

export { stats }
