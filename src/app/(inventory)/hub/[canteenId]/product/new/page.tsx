'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Link2, Loader2, PlusCircle, UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function NewProductPage() {
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [useUrl, setUseUrl] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    unit: '',
    image: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === 'image' && useUrl) {
      setImagePreview(value)
    }
  }

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setImagePreview(reader.result as string)
      reader.readAsDataURL(file)
      setFormData({ ...formData, image: file.name }) // Apenas o nome do arquivo para salvar
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulação de envio
    setTimeout(() => {
      setLoading(false)
      alert('Produto criado com sucesso!')
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        stock: '',
        unit: '',
        image: ''
      })
      setImagePreview(null)
    }, 2000)
  }

  return (
    <div className='container mx-auto py-10 px-4'>
      <Card className='max-w-4xl mx-auto shadow-lg rounded-xl border overflow-hidden'>
        <CardHeader className='bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-6'>
          <CardTitle className='text-3xl font-bold'>
            Adicionar Novo Produto
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Nome e Categoria */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Label
                  htmlFor='name'
                  className='text-sm font-medium text-gray-700'
                >
                  Nome do Produto
                </Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Digite o nome do produto'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='category'
                  className='text-sm font-medium text-gray-700'
                >
                  Categoria
                </Label>
                <Select
                  name='category'
                  value={formData.category}
                  onValueChange={handleCategoryChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione uma categoria' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='bebidas'>Bebidas</SelectItem>
                    <SelectItem value='lanches'>Lanches</SelectItem>
                    <SelectItem value='refeicoes'>Refeições</SelectItem>
                    <SelectItem value='sobremesas'>Sobremesas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Descrição */}
            <div className='space-y-2'>
              <Label
                htmlFor='description'
                className='text-sm font-medium text-gray-700'
              >
                Descrição
              </Label>
              <Textarea
                id='description'
                name='description'
                placeholder='Digite uma breve descrição do produto'
                value={formData.description}
                onChange={handleInputChange}
                required
                className='min-h-[100px]'
              />
            </div>

            {/* Preço, Estoque, Unidade */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='space-y-2'>
                <Label
                  htmlFor='price'
                  className='text-sm font-medium text-gray-700'
                >
                  Preço (R$)
                </Label>
                <Input
                  id='price'
                  name='price'
                  type='number'
                  step='0.01'
                  placeholder='0.00'
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='stock'
                  className='text-sm font-medium text-gray-700'
                >
                  Estoque
                </Label>
                <Input
                  id='stock'
                  name='stock'
                  type='number'
                  placeholder='Quantidade'
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='unit'
                  className='text-sm font-medium text-gray-700'
                >
                  Unidade
                </Label>
                <Input
                  id='unit'
                  name='unit'
                  type='text'
                  placeholder='ex: un, kg, l'
                  value={formData.unit}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* URL da Imagem ou Upload */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                Imagem do Produto
              </Label>
              <div className='flex gap-4'>
                <Button
                  variant={useUrl ? 'default' : 'outline'}
                  onClick={() => setUseUrl(true)}
                  type='button'
                >
                  <Link2 className='mr-2 h-4 w-4' />
                  URL da Imagem
                </Button>
                <Button
                  variant={!useUrl ? 'default' : 'outline'}
                  onClick={() => setUseUrl(false)}
                  type='button'
                >
                  <UploadCloud className='mr-2 h-4 w-4' />
                  Fazer Upload
                </Button>
              </div>
              {useUrl ? (
                <Input
                  id='image'
                  name='image'
                  type='url'
                  placeholder='https://exemplo.com/imagem.jpg'
                  value={formData.image}
                  onChange={handleInputChange}
                />
              ) : (
                <Input
                  id='file'
                  type='file'
                  accept='image/*'
                  onChange={handleImageUpload}
                />
              )}
              {imagePreview && (
                <div className='mt-4'>
                  <Image
                    src={imagePreview}
                    alt='Preview'
                    className='w-full max-h-64 object-cover rounded-md shadow-md'
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>

            {/* Botão de Submissão */}
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Salvando...
                </>
              ) : (
                <>
                  <PlusCircle className='mr-2 h-4 w-4' />
                  Adicionar Produto
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
