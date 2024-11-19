'use client'
import { useRouter } from 'next/navigation'
import { CustomButton } from './CustomButton'

export const EmptyState = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/canteens/new')
  }

  return (
    <div className='text-center p-6'>
      <h2 className='text-lg font-bold mb-2'>Nenhum Cantina Encontrada</h2>
      <p className='text-sm text-gray-500 mb-4'>
        {`Você ainda não tem nenhuma cantina. Comece criando uma nova!`}
      </p>
      <CustomButton title='Criar nova Cantina' onClick={handleClick} />
    </div>
  )
}
