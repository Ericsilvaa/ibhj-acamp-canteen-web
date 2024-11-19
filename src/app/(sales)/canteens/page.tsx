'use client'
import { CanteenCard } from '@/components/common/cards/CanteenCard'
import { CustomButton } from '@/components/common/CustomButton'
import { EmptyState } from '@/components/common/EmptyState'
import { HeaderHero } from '@/components/common/headers/HeaderHero'
import { ContainerBase } from '@/components/containers/ContainerBase'
import { canteens } from '@/constants/temp/canteens'
import { useRouter } from 'next/navigation'

const HomePage: React.FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/canteens/new')
  }
  return (
    <ContainerBase>
      <HeaderHero
        title='Cantinas'
        action={
          <CustomButton title='Criar nova Cantina' onClick={handleClick} />
        }
      />

      {/* Conditional rendering */}
      {canteens.length === 0 ? (
        <EmptyState
          title='Nenhuma Cantina Encontrada'
          message='Você ainda não tem nenhuma cantina. Comece criando uma nova!'
          buttonLabel='Criar nova Cantina'
          buttonAction={handleClick}
        />
      ) : (
        <div className='grid grid-cols-1 gap-4'>
          {canteens.map((canteen) => (
            <CanteenCard
              key={canteen.id}
              id={canteen.id}
              name={canteen.name}
              type={canteen.type}
              responsible={canteen.responsible}
              status={canteen.status}
              profit={canteen.profit}
            />
          ))}
        </div>
      )}
    </ContainerBase>
  )
}

export default HomePage
