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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'

export default function Clientes() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold text-blue-900'>Gestão de Clientes</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className='mr-2 h-4 w-4' /> Novo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Cliente</DialogTitle>
            </DialogHeader>
            <form className='space-y-4'>
              <Input placeholder='Nome do Cliente' />
              <Input placeholder='E-mail' type='email' />
              <Input placeholder='Telefone' type='tel' />
              <Button type='submit' className='w-full'>
                Salvar Cliente
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex space-x-2'>
        <Input placeholder='Buscar clientes...' className='max-w-sm' />
        <Button variant='outline'>
          <Search className='h-4 w-4' />
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Créditos</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5].map((item) => (
                <TableRow key={item}>
                  <TableCell>Cliente {item}</TableCell>
                  <TableCell>cliente{item}@example.com</TableCell>
                  <TableCell>(11) 9999-9999</TableCell>
                  <TableCell>R$ {(Math.random() * 100).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant='outline' size='sm'>
                      Editar
                    </Button>
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
