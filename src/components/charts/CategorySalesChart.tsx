import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CategorySalesChart = () => {
  return (
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
  )
}
