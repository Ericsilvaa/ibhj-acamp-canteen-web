'use client'

import { CreateCanteenModal } from '@/components/modals/CreateCanteenModal'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

const canteens = [
  {
    id: '1',
    name: 'Summer Camp Canteen',
    type: 'Acampamento',
    responsible: 'John Doe',
    status: 'active',
    profit: 1000.0
  },
  {
    id: '2',
    name: 'School Canteen',
    type: 'Escola',
    responsible: 'Jane Smith',
    status: 'inactive',
    profit: 500.0
  }
]

export default function CanteensPage() {
  const router = useRouter()
  return (
    <div className='container mx-auto py-10 px-4 space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Cantinas</h1>
        <CreateCanteenModal />
      </div>

      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hover:cursor-pointer'>
        {canteens.map((canteen) => (
          <Card
            key={canteen.id}
            onClick={() => router.push(`/canteens/${canteen.id}/dashboard`)}
            className='hover:shadow-lg transition-shadow'
          >
            <CardHeader>
              <CardTitle className='text-xl font-semibold'>
                {canteen.name}
              </CardTitle>
              <Badge
                variant={
                  canteen.status === 'active' ? 'success' : 'destructive'
                }
                className='mt-1'
              >
                {canteen.status === 'active' ? 'Ativo' : 'Inativo'}
              </Badge>
            </CardHeader>
            <CardContent className='space-y-2'>
              <p className='text-sm text-muted-foreground'>
                Tipo: <span className='font-medium'>{canteen.type}</span>
              </p>
              <p className='text-sm text-muted-foreground'>
                Responsável:{' '}
                <span className='font-medium'>{canteen.responsible}</span>
              </p>
              <p className='text-sm text-muted-foreground'>
                Lucro:{' '}
                <span className='font-medium'>
                  R${canteen.profit.toFixed(2)}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
