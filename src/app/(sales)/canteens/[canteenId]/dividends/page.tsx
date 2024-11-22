import { DebtorCard } from '@/components/common/cards/DebtorCard'
import { EmptyState } from '@/components/common/EmptyState'
import { HeaderHero } from '@/components/common/headers/HeaderHero'
import { ContainerBase } from '@/components/containers/ContainerBase'
import { mockDebtors } from '@/constants/temp/canteens'

export default function DividendsPage() {
  return (
    <ContainerBase>
      <HeaderHero title='Devedores da Cantina' />
      <div className='text-center mt-4'>
        <p className='text-sm text-gray-500'>
          Lista de pessoas com pagamentos pendentes na cantina.
        </p>
      </div>
      {mockDebtors.length > 0 ? (
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {mockDebtors.map((debtor, index) => (
            <DebtorCard
              key={index}
              name={debtor.name}
              amount={debtor.amount}
              dueDate={debtor.dueDate}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title='Nenhum Devedor Encontrado'
          message='Não há registros de devedores para esta cantina.'
          buttonLabel='Voltar ao Dashboard'
          buttonAction={() => console.log('Redirecionando para o dashboard')}
        />
      )}
    </ContainerBase>
  )
}
