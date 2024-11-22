'use client'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { AlertCircle, ArrowLeft, ArrowUpDown, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Transaction {
  id: string
  type: string
  quantity: number
  date: string
  status: 'completed' | 'pending'
  user: string
}

const mockTransactions: Transaction[] = [
  {
    id: 'txn1',
    type: 'Venda',
    quantity: -10,
    date: '2024-11-18T10:00:00.000Z',
    status: 'completed',
    user: 'Maria Silva'
  },
  {
    id: 'txn2',
    type: 'Entrada no Estoque',
    quantity: 50,
    date: '2024-11-17T15:00:00.000Z',
    status: 'completed',
    user: 'João Santos'
  },
  {
    id: 'txn3',
    type: 'Venda',
    quantity: -5,
    date: '2024-11-16T14:30:00.000Z',
    status: 'completed',
    user: 'Ana Oliveira'
  },
  {
    id: 'txn4',
    type: 'Ajuste de Estoque',
    quantity: -3,
    date: '2024-11-15T09:00:00.000Z',
    status: 'completed',
    user: 'Carlos Ferreira'
  },
  {
    id: 'txn5',
    type: 'Venda',
    quantity: -8,
    date: '2024-11-14T11:20:00.000Z',
    status: 'pending',
    user: 'Beatriz Lima'
  },
  {
    id: 'txn6',
    type: 'Entrada no Estoque',
    quantity: 30,
    date: '2024-11-13T16:45:00.000Z',
    status: 'completed',
    user: 'João Santos'
  },
  {
    id: 'txn7',
    type: 'Venda',
    quantity: -12,
    date: '2024-11-12T13:15:00.000Z',
    status: 'completed',
    user: 'Maria Silva'
  },
  {
    id: 'txn8',
    type: 'Ajuste de Estoque',
    quantity: 5,
    date: '2024-11-11T10:30:00.000Z',
    status: 'completed',
    user: 'Carlos Ferreira'
  },
  {
    id: 'txn9',
    type: 'Venda',
    quantity: -15,
    date: '2024-11-10T14:00:00.000Z',
    status: 'completed',
    user: 'Ana Oliveira'
  },
  {
    id: 'txn10',
    type: 'Entrada no Estoque',
    quantity: 40,
    date: '2024-11-09T09:45:00.000Z',
    status: 'completed',
    user: 'João Santos'
  }
]

export default function ProductHistoryPage({
  params
}: {
  params: { productId: string; canteenId: string }
}) {
  const router = useRouter()
  const [history, setHistory] = useState<Transaction[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productName, setProductName] = useState<string>('Coxinha Gourmet')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction
    direction: 'asc' | 'desc'
  } | null>(null)
  const [filterType, setFilterType] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setHistory(mockTransactions)
      setIsLoading(false)
    }

    fetchHistory()
  }, [params.productId])

  const sortedHistory = [...history].sort((a, b) => {
    if (!sortConfig) return 0
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1
    }
    return 0
  })

  const filteredHistory = sortedHistory.filter((transaction) => {
    const matchesType = filterType === 'all' || transaction.type === filterType
    const matchesSearch =
      transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.user.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredHistory.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const requestSort = (key: keyof Transaction) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const getTotalQuantityChange = () => {
    return history.reduce(
      (total, transaction) => total + transaction.quantity,
      0
    )
  }

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <p className='text-blue-600 font-semibold'>
          Carregando histórico de movimentações...
        </p>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-4 max-w-5xl'>
      <Card className='bg-white border border-gray-200 shadow-lg'>
        <CardHeader className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
          <CardTitle className='text-2xl font-bold'>
            Histórico de Movimentações: {productName}
          </CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <Alert className='mb-6'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Resumo de Movimentações</AlertTitle>
            <AlertDescription>
              Alteração total no estoque: {getTotalQuantityChange()} unidades
            </AlertDescription>
          </Alert>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center space-x-2'>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Filtrar por tipo' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>Todos os tipos</SelectItem>
                  <SelectItem value='Venda'>Venda</SelectItem>
                  <SelectItem value='Entrada no Estoque'>
                    Entrada no Estoque
                  </SelectItem>
                  <SelectItem value='Ajuste de Estoque'>
                    Ajuste de Estoque
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className='relative'>
                <Search
                  className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <Input
                  placeholder='Buscar...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='pl-10'
                />
              </div>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className='cursor-pointer'
                  onClick={() => requestSort('type')}
                >
                  Tipo{' '}
                  {sortConfig?.key === 'type' && (
                    <ArrowUpDown className='inline ml-1' size={16} />
                  )}
                </TableHead>
                <TableHead
                  className='cursor-pointer'
                  onClick={() => requestSort('quantity')}
                >
                  Quantidade{' '}
                  {sortConfig?.key === 'quantity' && (
                    <ArrowUpDown className='inline ml-1' size={16} />
                  )}
                </TableHead>
                <TableHead
                  className='cursor-pointer'
                  onClick={() => requestSort('date')}
                >
                  Data{' '}
                  {sortConfig?.key === 'date' && (
                    <ArrowUpDown className='inline ml-1' size={16} />
                  )}
                </TableHead>
                <TableHead
                  className='cursor-pointer'
                  onClick={() => requestSort('status')}
                >
                  Status{' '}
                  {sortConfig?.key === 'status' && (
                    <ArrowUpDown className='inline ml-1' size={16} />
                  )}
                </TableHead>
                <TableHead
                  className='cursor-pointer'
                  onClick={() => requestSort('user')}
                >
                  Usuário{' '}
                  {sortConfig?.key === 'user' && (
                    <ArrowUpDown className='inline ml-1' size={16} />
                  )}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((transaction) => (
                <TableRow key={transaction.id} className='hover:bg-gray-50'>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell
                    className={
                      transaction.quantity < 0
                        ? 'text-red-600'
                        : 'text-green-600'
                    }
                  >
                    {transaction.quantity > 0
                      ? `+${transaction.quantity}`
                      : transaction.quantity}
                  </TableCell>
                  <TableCell>
                    {new Date(transaction.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === 'completed'
                          ? 'success'
                          : 'destructive'
                      }
                    >
                      {transaction.status === 'completed'
                        ? 'Concluído'
                        : 'Pendente'}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.user}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className='mt-4'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => paginate(currentPage - 1)}
                  // disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({
                length: Math.ceil(filteredHistory.length / itemsPerPage)
              }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => paginate(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => paginate(currentPage + 1)}
                  // disabled={
                  //   currentPage ===
                  //   Math.ceil(filteredHistory.length / itemsPerPage)
                  // }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
        <div className='p-4 flex justify-end'>
          <Button
            variant='outline'
            onClick={() => router.back()}
            className='border-blue-600 text-blue-600 hover:bg-blue-50'
          >
            <ArrowLeft className='mr-2 h-4 w-4' /> Voltar
          </Button>
        </div>
      </Card>
    </div>
  )
}
