'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'

export default function Produtos() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold text-blue-900'>Gestão de Produtos</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className='mr-2 h-4 w-4' /> Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Produto</DialogTitle>
            </DialogHeader>
            <form className='space-y-4'>
              <Input placeholder='Nome do Produto' />
              <Input type='number' placeholder='Preço' />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Categoria' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='bebidas'>Bebidas</SelectItem>
                  <SelectItem value='comidas'>Comidas</SelectItem>
                  <SelectItem value='snacks'>Snacks</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder='Descrição' />
              <Input type='file' accept='image/*' />
              <Button type='submit' className='w-full'>
                Salvar Produto
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex space-x-2'>
        <Input placeholder='Buscar produtos...' className='max-w-sm' />
        <Button variant='outline'>
          <Search className='h-4 w-4' />
        </Button>
      </div>
      <Tabs defaultValue='todos'>
        <TabsList>
          <TabsTrigger value='todos'>Todos</TabsTrigger>
          <TabsTrigger value='bebidas'>Bebidas</TabsTrigger>
          <TabsTrigger value='comidas'>Comidas</TabsTrigger>
          <TabsTrigger value='snacks'>Snacks</TabsTrigger>
        </TabsList>
        <TabsContent value='todos' className='mt-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Produto {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Preço: R$ {(Math.random() * 10).toFixed(2)}</p>
                  <p>Estoque: {Math.floor(Math.random() * 100)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
