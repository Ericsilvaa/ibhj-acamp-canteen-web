//  # Resumo do carrinho
'use client'

const SummaryPage: React.FC = () => {
  const orderDetails = {
    orderId: '123456789',
    total: 50.0,
    items: [
      { id: '1', name: 'Pizza', price: 10, quantity: 2 },
      { id: '2', name: 'Burger', price: 5, quantity: 2 }
    ],
    paymentMethod: 'Credit Card'
  }

  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Order Summary</h1>
      <div className='space-y-4'>
        <div>
          <p className='text-sm text-gray-500'>Order ID:</p>
          <p className='font-medium'>{orderDetails.orderId}</p>
        </div>
        <div>
          <p className='text-sm text-gray-500'>Total:</p>
          <p className='font-medium'>${orderDetails.total.toFixed(2)}</p>
        </div>
        <div>
          <p className='text-sm text-gray-500'>Payment Method:</p>
          <p className='font-medium'>{orderDetails.paymentMethod}</p>
        </div>
        <div>
          <p className='text-sm text-gray-500'>Items:</p>
          <ul className='space-y-2'>
            {orderDetails.items.map((item) => (
              <li
                key={item.id}
                className='flex justify-between items-center border-b pb-2'
              >
                <span>{item.name}</span>
                <span>
                  {item.quantity} × ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => alert('Thank you for your purchase!')}
        className='mt-6 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
      >
        Done
      </button>
    </div>
  )
}

export default SummaryPage
