'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import {
  ArrowLeft,
  DollarSign,
  ImageIcon,
  Loader2,
  Package,
  Save
} from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  category: string
  imageUrl: string
}

const mockProduct: Product = {
  id: '1',
  name: 'Coxinha Gourmet',
  description: 'Deliciosa coxinha de frango com catupiry, feita artesanalmente',
  price: 5.99,
  stock: 30,
  category: 'Salgados Especiais',
  imageUrl: 'https://via.placeholder.com/300'
}

export default function EditPage({
  params
}: {
  params: { productId: string; canteenId: string }
}) {
  const [product, setProduct] = useState<Product>(mockProduct)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setProduct(mockProduct)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setProduct((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Sucesso',
        description: 'Produto atualizado com sucesso!'
      })
      router.push(
        `/hub/${params.canteenId}/product/${params.productId}/details`
      )
    }, 1500)
  }

  return (
    <div className='container mx-auto p-4 max-w-4xl'>
      <Card className='overflow-hidden'>
        <CardHeader className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <CardTitle className='text-2xl font-bold'>Editar Produto</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className='p-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='aspect-square relative overflow-hidden rounded-lg border border-gray-200'>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout='fill'
                    objectFit='cover'
                    className='transition-all duration-300 hover:scale-105'
                  />
                </div>
                <Button className='w-full' variant='outline'>
                  <ImageIcon className='mr-2 h-4 w-4' /> Alterar Imagem
                </Button>
              </div>
              <div className='space-y-4'>
                <Tabs defaultValue='basic' className='w-full'>
                  <TabsList className='grid w-full grid-cols-2'>
                    <TabsTrigger value='basic'>Informações Básicas</TabsTrigger>
                    <TabsTrigger value='details'>Detalhes</TabsTrigger>
                  </TabsList>
                  <TabsContent value='basic' className='space-y-4 mt-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='name'>Nome do Produto</Label>
                      <Input
                        id='name'
                        name='name'
                        value={product.name}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        className='w-full'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='category'>Categoria</Label>
                      <Select
                        value={product.category}
                        onValueChange={handleSelectChange}
                        disabled={isLoading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Selecione uma categoria' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='Salgados Especiais'>
                            Salgados Especiais
                          </SelectItem>
                          <SelectItem value='Doces'>Doces</SelectItem>
                          <SelectItem value='Bebidas'>Bebidas</SelectItem>
                          <SelectItem value='Lanches'>Lanches</SelectItem>
                          <SelectItem value='Outros'>Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  <TabsContent value='details' className='space-y-4 mt-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='description'>Descrição</Label>
                      <Textarea
                        id='description'
                        name='description'
                        value={product.description}
                        onChange={handleInputChange}
                        disabled={isLoading}
                        className='min-h-[100px]'
                      />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='price'>Preço (R$)</Label>
                        <div className='relative'>
                          <DollarSign
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                            size={16}
                          />
                          <Input
                            id='price'
                            name='price'
                            type='number'
                            step='0.01'
                            value={product.price}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            className='pl-10'
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='stock'>Estoque</Label>
                        <div className='relative'>
                          <Package
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                            size={16}
                          />
                          <Input
                            id='stock'
                            name='stock'
                            type='number'
                            value={product.stock}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            className='pl-10'
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
          <CardFooter className='bg-gray-50 flex justify-between'>
            <Button
              type='button'
              variant='outline'
              onClick={() => router.back()}
              disabled={isLoading}
            >
              <ArrowLeft className='mr-2 h-4 w-4' /> Voltar
            </Button>
            <Button
              type='submit'
              disabled={isLoading}
              className='bg-blue-600 text-white hover:bg-blue-700'
            >
              {isLoading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className='mr-2 h-4 w-4' /> Salvar Alterações
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
