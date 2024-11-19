//  # Página principal do carrinho
'use client'
import { CustomButton } from '@/components/common/CustomButton'
import { useState } from 'react'

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Pizza', price: 10, quantity: 1 }
  ])

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    )
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className='flex justify-between items-center'>
              <p>{item.name}</p>
              <input
                type='number'
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value, 10))
                }
                className='w-12 text-center border rounded'
              />
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button
                className='text-red-500'
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <p className='mt-4'>Total: ${total.toFixed(2)}</p>
          <CustomButton
            onClick={() => console.log('/sales/checkout')}
            title='Fazer o Check-out'
          />
        </div>
      )}
    </div>
  )
}

export default CartPage
