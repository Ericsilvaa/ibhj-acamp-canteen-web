'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useEffect, useState } from 'react'

export default function ProductStockPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula a busca dos dados de produtos
    const fetchProducts = async () => {
      // Mock de dados (substitua por chamada à API)
      const mockProducts = [
        { id: 'prod1', name: 'Coxinha', stock: 50 },
        { id: 'prod2', name: 'Refrigerante', stock: 30 },
        { id: 'prod3', name: 'Salgadinho', stock: 15 }
      ]
      setTimeout(() => {
        setProducts(mockProducts)
        setLoading(false)
      }, 1000)
    }

    fetchProducts()
  }, [])

  const handleUpdateStock = (id: string, newStock: number) => {
    // Atualiza o estoque localmente (substitua por chamada à API)
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, stock: newStock } : product
      )
    )
    alert(
      `Estoque atualizado para o produto ID: ${id}, novo estoque: ${newStock}`
    )
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-blue-50'>
        <p className='text-blue-900 font-semibold'>Carregando produtos...</p>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-50'>
      <Card className='w-full max-w-4xl bg-white border border-blue-200 shadow-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-blue-900'>
            Gerenciamento de Estoque
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Estoque Atual</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <Input
                        type='number'
                        min='0'
                        placeholder='Novo estoque'
                        className='w-24'
                        onChange={(e) =>
                          handleUpdateStock(
                            product.id,
                            parseInt(e.target.value, 10)
                          )
                        }
                      />
                      <Button
                        variant='outline'
                        className='text-blue-900 border-blue-900'
                        onClick={
                          () =>
                            handleUpdateStock(product.id, product.stock + 10) // Simula a adição de 10 itens
                        }
                      >
                        Atualizar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
