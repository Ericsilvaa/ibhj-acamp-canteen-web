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
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PATHS } from '@/constants/paths'
import { ArrowLeft, Calendar, Edit, Package } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  imageUrl: string
  category: string
  createdAt: string
  updatedAt: string
}

export default function ProductDetailsPage({
  params
}: {
  params: { productId: string; canteenId: string }
}) {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Mock product data
      const mockProduct: Product = {
        id: params.productId,
        name: 'Coxinha Gourmet',
        description:
          'Deliciosa coxinha de frango com catupiry, feita artesanalmente',
        price: 5.99,
        stock: 30,
        imageUrl: 'https://via.placeholder.com/300',
        category: 'Salgados Especiais',
        createdAt: '2024-11-18T12:00:00.000Z',
        updatedAt: '2024-11-18T15:00:00.000Z'
      }
      setProduct(mockProduct)
      setIsLoading(false)
    }

    fetchProduct()
  }, [params.productId])

  const handleEdit = () => {
    // Navigate to edit page (implement this functionality)
    console.log('Edit product:', params.productId)
    router.push(PATHS.hub.product.id.edit(params.canteenId, params.productId))
  }

  const handleBack = () => {
    router.back()
  }

  if (isLoading) {
    return (
      <div className='container mx-auto p-4 max-w-4xl'>
        <Card>
          <CardHeader>
            <Skeleton className='h-8 w-2/3' />
          </CardHeader>
          <CardContent>
            <Skeleton className='h-64 w-full mb-4' />
            <Skeleton className='h-4 w-full mb-2' />
            <Skeleton className='h-4 w-2/3' />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!product) {
    return (
      <div className='container mx-auto p-4 max-w-4xl'>
        <Card>
          <CardContent className='flex items-center justify-center h-64'>
            <p className='text-lg font-semibold text-gray-500'>
              Produto não encontrado
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-4 max-w-4xl'>
      <Card className='overflow-hidden'>
        <CardHeader className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <div className='flex justify-between items-center'>
            <CardTitle className='text-2xl font-bold'>{product.name}</CardTitle>
            <Badge variant='secondary' className='text-xs font-medium'>
              {product.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className='w-full h-auto rounded-lg shadow-md object-cover'
              />
              <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                  {/* <DollarSign className='text-green-500' /> */}
                  <span className='text-2xl font-bold text-green-600'>
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
                <div>
                  <Badge
                    variant={product.stock > 0 ? 'success' : 'destructive'}
                    className='text-sm'
                  >
                    {product.stock > 0
                      ? `${product.stock} em estoque`
                      : 'Sem estoque'}
                  </Badge>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <Tabs defaultValue='details'>
                <TabsList className='grid w-full grid-cols-2'>
                  <TabsTrigger value='details'>Detalhes</TabsTrigger>
                  <TabsTrigger value='info'>Informações</TabsTrigger>
                </TabsList>
                <TabsContent value='details' className='mt-4'>
                  <p className='text-gray-700'>{product.description}</p>
                </TabsContent>
                <TabsContent value='info' className='mt-4 space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <Package className='text-blue-500' />
                    <span className='text-sm text-gray-600'>
                      ID: {product.id}
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Calendar className='text-blue-500' />
                    <span className='text-sm text-gray-600'>
                      Criado em:{' '}
                      {new Date(product.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Calendar className='text-blue-500' />
                    <span className='text-sm text-gray-600'>
                      Atualizado em:{' '}
                      {new Date(product.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
        <CardFooter className='bg-gray-50 flex justify-between'>
          <Button
            variant='outline'
            onClick={handleBack}
            className='flex items-center'
          >
            <ArrowLeft className='mr-2 h-4 w-4' /> Voltar
          </Button>
          <Button
            onClick={handleEdit}
            className='bg-blue-600 text-white hover:bg-blue-700'
          >
            <Edit className='mr-2 h-4 w-4' /> Editar Produto
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
