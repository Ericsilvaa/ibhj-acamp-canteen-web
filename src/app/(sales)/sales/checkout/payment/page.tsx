//  # Escolha de método de pagamento
'use client'

import { useState } from 'react'

const PaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    try {
      // Simula o processamento do pagamento
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert('Payment successful!')
      console.log('Payment successful!', '/sales/summary')
    } catch (error) {
      console.log(error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Payment</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handlePayment()
        }}
        className='space-y-4'
      >
        <div>
          <label className='block mb-2 text-sm font-medium'>Card Number</label>
          <input
            type='text'
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder='1234 5678 9012 3456'
            className='w-full border rounded px-3 py-2'
            required
          />
        </div>
        <div className='flex space-x-4'>
          <div>
            <label className='block mb-2 text-sm font-medium'>
              Expiry Date
            </label>
            <input
              type='text'
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder='MM/YY'
              className='w-full border rounded px-3 py-2'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium'>CVV</label>
            <input
              type='text'
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder='123'
              className='w-full border rounded px-3 py-2'
              required
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={isProcessing}
          className={`w-full px-4 py-2 text-white rounded ${
            isProcessing ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  )
}

export default PaymentPage
