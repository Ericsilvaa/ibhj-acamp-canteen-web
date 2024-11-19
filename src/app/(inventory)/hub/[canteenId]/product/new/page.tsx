'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function NewProductPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      alert('Produto criado com sucesso!')
    }, 2000)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-50'>
      <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md border border-blue-200'>
        <h1 className='text-2xl font-bold text-blue-900 text-center mb-6'>
          Novo Produto
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='name' className='text-blue-800'>
              Nome do Produto
            </Label>
            <Input
              id='name'
              name='name'
              type='text'
              placeholder='Digite o nome do produto'
              className='mt-2'
              required
            />
          </div>
          <div>
            <Label htmlFor='description' className='text-blue-800'>
              Descrição
            </Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Digite uma breve descrição'
              className='mt-2'
              required
            />
          </div>
          <div>
            <Label htmlFor='price' className='text-blue-800'>
              Preço
            </Label>
            <Input
              id='price'
              name='price'
              type='number'
              step='0.01'
              placeholder='Digite o preço'
              className='mt-2'
              required
            />
          </div>
          <div>
            <Label htmlFor='stock' className='text-blue-800'>
              Estoque
            </Label>
            <Input
              id='stock'
              name='stock'
              type='number'
              placeholder='Digite a quantidade em estoque'
              className='mt-2'
              required
            />
          </div>
          <div>
            <Label htmlFor='image' className='text-blue-800'>
              URL da Imagem
            </Label>
            <Input
              id='image'
              name='image'
              type='url'
              placeholder='Insira o link da imagem'
              className='mt-2'
            />
          </div>
          <Button
            type='submit'
            className='w-full bg-blue-900 text-white hover:bg-blue-800'
            disabled={loading}
          >
            {loading ? 'Salvando...' : 'Salvar Produto'}
          </Button>
        </form>
      </div>
    </div>
  )
}
