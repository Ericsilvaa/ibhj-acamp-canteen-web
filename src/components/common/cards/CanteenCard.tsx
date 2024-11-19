import Link from 'next/link'

interface CanteenCardProps {
  id: string
  name: string
  type: string
  responsible: string
  status: string
  profit: number
}

export const CanteenCard = ({
  id,
  name,
  type,
  responsible,
  status,
  profit
}: CanteenCardProps) => {
  return (
    <Link
      href={`/canteens/${id}/dashboard`}
      className='block border rounded-lg p-4 shadow-sm hover:shadow-md hover:border-blue-500 transition-all'
    >
      <h2 className='text-lg font-bold'>{name}</h2>
      <p className='text-sm text-gray-500'>
        <span className='font-medium'>Type:</span> {type}
      </p>
      <p className='text-sm text-gray-500'>
        <span className='font-medium'>Responsible:</span> {responsible}
      </p>
      <p
        className={`text-sm ${
          status === 'active' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        <span className='font-medium'>Status:</span> {status}
      </p>
      <p className='text-sm text-blue-500'>
        <span className='font-medium'>Profit:</span> ${profit.toFixed(2)}
      </p>
    </Link>
  )
}
