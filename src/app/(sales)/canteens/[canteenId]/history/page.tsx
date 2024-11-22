'use client'

import { SaleCard } from '@/components/common/cards/SaleCard'
import { EmptyState } from '@/components/common/EmptyState'
import { HeaderHero } from '@/components/common/headers/HeaderHero'
import { ContainerBase } from '@/components/containers/ContainerBase'
import { mockSalesHistory } from '@/constants/temp/canteens'

export default function HistoryPage() {
  return (
    <ContainerBase>
      <HeaderHero title='Histórico de Vendas' />
      <div className='text-center mt-4'>
        <p className='text-sm text-gray-500'>
          Visualize todas as vendas realizadas na cantina.
        </p>
      </div>
      {mockSalesHistory.length > 0 ? (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {mockSalesHistory.map((sale, index) => (
            <SaleCard
              key={index}
              transactionId={sale.transactionId}
              date={sale.date}
              totalAmount={sale.totalAmount}
              products={sale.products}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title='Nenhuma Venda Registrada'
          message='Nenhuma venda foi registrada até o momento.'
        />
      )}
    </ContainerBase>
  )
}
