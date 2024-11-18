'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductDetailsPage({
  params
}: {
  params: { id: string }
}) {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    // Simula a busca dos dados do produto com base no ID
    const fetchProduct = async () => {
      // Exemplo de dados mockados (substitua pela chamada à API)
      const mockProduct = {
        id: params.id,
        name: 'Coxinha',
        description: 'Deliciosa coxinha de frango',
        price: 5.0,
        stock: 30,
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Snacks',
        createdAt: '2024-11-18T12:00:00.000Z',
        updatedAt: '2024-11-18T15:00:00.000Z'
      }
      setProduct(mockProduct)
    }

    fetchProduct()
  }, [params.id])

  if (!product) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-blue-50'>
        <p className='text-blue-900 font-semibold'>
          Carregando detalhes do produto...
        </p>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-50'>
      <Card className='w-full max-w-lg bg-white border border-blue-200 shadow-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-blue-900'>
            {product.name}
          </CardTitle>
          <p className='text-sm text-blue-700'>{product.category}</p>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Image
            width={150}
            height={150}
            src={product.imageUrl}
            alt={product.name}
            className='w-full h-48 object-cover rounded-md border border-blue-100'
          />
          <p className='text-sm text-gray-700'>{product.description}</p>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm font-semibold text-blue-900'>Preço:</p>
              <p className='text-lg font-bold text-blue-900'>
                R$ {product.price.toFixed(2)}
              </p>
            </div>
            <div>
              <p className='text-sm font-semibold text-blue-900'>Estoque:</p>
              {product.stock > 0 ? (
                <Badge className='bg-green-100 text-green-800'>
                  {product.stock} disponíveis
                </Badge>
              ) : (
                <Badge className='bg-red-100 text-red-800'>Sem estoque</Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            variant='outline'
            onClick={() => router.back()}
            className='border-blue-900 text-blue-900'
          >
            Voltar
          </Button>
          <Button className='bg-blue-900 text-white hover:bg-blue-800'>
            Editar Produto
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
