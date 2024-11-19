import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, DollarSign, ShoppingCart, Users } from 'lucide-react'

function RootPage() {
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold text-blue-900'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Vendas Totais</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>R$ 45.231,89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Novos Clientes
            </CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Produtos Vendidos
            </CardTitle>
            <ShoppingCart className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+12,234</div>
            <p className='text-xs text-muted-foreground'>
              +19% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Lucro</CardTitle>
            <BarChart className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>R$ 15.231,89</div>
            <p className='text-xs text-muted-foreground'>
              +4% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Vendas por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='h-[200px] bg-gray-200 flex items-center justify-center'>
            Gráfico de Vendas por Categoria (a ser implementado)
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RootPage
