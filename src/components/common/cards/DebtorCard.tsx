interface DebtorCardProps {
  name: string
  amount: string
  dueDate: string
}

export const DebtorCard = ({ name, amount, dueDate }: DebtorCardProps) => (
  <div className='bg-white p-4 shadow-md rounded flex justify-between items-center'>
    <div>
      <h2 className='text-lg font-semibold text-gray-800'>{name}</h2>
      <p className='text-sm text-gray-500'>Valor devido: {amount}</p>
      <p className='text-sm text-gray-500'>Vencimento: {dueDate}</p>
    </div>
    <button className='text-sm text-blue-500 hover:underline'>Cobrar</button>
  </div>
)
