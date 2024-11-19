'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProductHistoryPage({
  params
}: {
  params: { id: string }
}) {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [history, setHistory] = useState<any[]>([])
  const [productName, setProductName] = useState<string | null>(null)

  useEffect(() => {
    // Simula a busca dos dados do histórico de movimentações
    const fetchHistory = async () => {
      // Mock de dados (substitua por uma chamada à API)
      const mockHistory = {
        productName: 'Coxinha',
        transactions: [
          {
            id: 'txn1',
            type: 'Venda',
            quantity: 10,
            date: '2024-11-18T10:00:00.000Z',
            status: 'completed'
          },
          {
            id: 'txn2',
            type: 'Entrada no Estoque',
            quantity: 50,
            date: '2024-11-17T15:00:00.000Z',
            status: 'completed'
          },
          {
            id: 'txn3',
            type: 'Venda',
            quantity: 5,
            date: '2024-11-16T14:30:00.000Z',
            status: 'completed'
          }
        ]
      }
      setProductName(mockHistory.productName)
      setHistory(mockHistory.transactions)
    }

    fetchHistory()
  }, [params.id])

  if (!history.length) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-blue-50'>
        <p className='text-blue-900 font-semibold'>
          Carregando histórico de movimentações...
        </p>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-50'>
      <Card className='w-full max-w-4xl bg-white border border-blue-200 shadow-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-blue-900'>
            Histórico de Movimentações: {productName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.quantity}</TableCell>
                  <TableCell>
                    {new Date(transaction.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }
                    >
                      {transaction.status === 'completed'
                        ? 'Concluído'
                        : 'Pendente'}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <div className='p-4 flex justify-end'>
          <Button
            variant='outline'
            onClick={() => router.back()}
            className='border-blue-900 text-blue-900'
          >
            Voltar
          </Button>
        </div>
      </Card>
    </div>
  )
}
