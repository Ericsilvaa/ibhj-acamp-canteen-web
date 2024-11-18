// # Fluxo de finalização do pedido
//   # Página principal do checkout
'use client'

import { useRouter } from 'next/navigation'

const CheckoutPage: React.FC = () => {
  const router = useRouter()

  const proceedToPayment = () => {
    // Redireciona para a página de pagamento
    router.push('/sales/checkout/payment')
  }

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Checkout</h1>
      <p>Review your order and proceed to payment.</p>
      <button
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        onClick={proceedToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  )
}

export default CheckoutPage
