/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import { ArrowUpDown, Package, RefreshCw, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type StockItemType = {
  id: string
  name: string
  category: string
  quantity: number
  unit: string
  lastUpdated: string
}

const StockItem: StockItemType[] = [
  {
    id: '1',
    name: 'Apples',
    category: 'Fruit',
    quantity: 50,
    unit: 'kg',
    lastUpdated: '2023-05-15'
  },
  {
    id: '2',
    name: 'Chicken Breast',
    category: 'Meat',
    quantity: 30,
    unit: 'kg',
    lastUpdated: '2023-05-14'
  },
  {
    id: '3',
    name: 'Milk',
    category: 'Dairy',
    quantity: 100,
    unit: 'L',
    lastUpdated: '2023-05-16'
  },
  {
    id: '4',
    name: 'Bread',
    category: 'Bakery',
    quantity: 75,
    unit: 'loaves',
    lastUpdated: '2023-05-15'
  },
  {
    id: '5',
    name: 'Tomatoes',
    category: 'Vegetable',
    quantity: 40,
    unit: 'kg',
    lastUpdated: '2023-05-16'
  }
]

export default function StockList() {
  const [stockItems, setStockItems] = useState<StockItemType[]>(StockItem)
  const [isLoading, setIsLoading] = useState(true)
  const [sortColumn, setSortColumn] = useState<keyof StockItemType>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  const canteenId = '1'

  const handleSort = (column: keyof StockItemType) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const resetFilters = () => {
    setSearchTerm('')
    setFilterCategory('all')
  }

  const sortedAndFilteredItems = stockItems
    .filter(
      (item) => filterCategory === 'all' || item.category === filterCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

  const uniqueCategories = Array.from(
    new Set(stockItems.map((item) => item.category))
  )

  if (isLoading) {
    return <div className='text-center py-4 text-lg'>Loading stock data...</div>
  }

  return (
    <div className='space-y-4 p-6'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <div className='flex items-center w-full sm:w-auto'>
          <Search className='w-4 h-4 mr-2 text-gray-500' />
          <Input
            placeholder='Search items...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='max-w-sm'
          />
        </div>
        <div className='flex gap-4'>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className='w-full sm:w-[180px]'>
              <SelectValue placeholder='Filter by category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Categories</SelectItem>
              {uniqueCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant='ghost' size='sm' onClick={resetFilters}>
            <RefreshCw className='mr-2 h-4 w-4' />
            Reset
          </Button>
        </div>
      </div>

      <Table className='w-full border'>
        <TableHeader>
          <TableRow>
            <TableHead
              onClick={() => handleSort('name')}
              className='cursor-pointer hover:bg-gray-100'
            >
              Name{' '}
              {sortColumn === 'name' && (
                <ArrowUpDown className='inline ml-2 h-4 w-4' />
              )}
            </TableHead>
            <TableHead
              onClick={() => handleSort('category')}
              className='cursor-pointer hover:bg-gray-100'
            >
              Category{' '}
              {sortColumn === 'category' && (
                <ArrowUpDown className='inline ml-2 h-4 w-4' />
              )}
            </TableHead>
            <TableHead
              onClick={() => handleSort('quantity')}
              className='cursor-pointer hover:bg-gray-100'
            >
              Quantity{' '}
              {sortColumn === 'quantity' && (
                <ArrowUpDown className='inline ml-2 h-4 w-4' />
              )}
            </TableHead>
            <TableHead>Unit</TableHead>
            <TableHead
              onClick={() => handleSort('lastUpdated')}
              className='cursor-pointer hover:bg-gray-100'
            >
              Last Updated{' '}
              {sortColumn === 'lastUpdated' && (
                <ArrowUpDown className='inline ml-2 h-4 w-4' />
              )}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedAndFilteredItems.length > 0 ? (
            sortedAndFilteredItems.map((item) => (
              <TableRow key={item.id} className='hover:bg-gray-50'>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
                <TableCell>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() =>
                      router.push(`/hub/${canteenId}/stock/${item.id}`)
                    }
                  >
                    <Package className='mr-2 h-4 w-4' />
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className='text-center py-4'>
                No items found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
