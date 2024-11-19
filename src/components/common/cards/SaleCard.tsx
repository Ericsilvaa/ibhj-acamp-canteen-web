interface SaleCardProps {
  transactionId: string
  date: string
  totalAmount: string
  products: string[]
}

export const SaleCard = ({
  transactionId,
  date,
  totalAmount,
  products
}: SaleCardProps) => (
  <div className='bg-white p-4 shadow-md rounded flex flex-col'>
    <h2 className='text-lg font-semibold text-gray-800'>
      Pedido #{transactionId}
    </h2>
    <p className='text-sm text-gray-500'>Data: {date}</p>
    <p className='text-sm text-gray-500'>Total: {totalAmount}</p>
    <div className='mt-2'>
      <p className='text-sm font-medium text-gray-800'>Produtos:</p>
      <ul className='list-disc pl-5 text-sm text-gray-500'>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  </div>
)
