//  Página Raiz de Vendas (/sales/page.tsx)
// Essa será a página inicial de vendas, onde o cliente pode selecionar itens e adicioná-los ao carrinho.

// Funcionalidade:
// Exibe os produtos disponíveis (ex: bebidas, comidas, etc.).
// Cada item terá um botão "Adicionar ao carrinho".
// Mostra o estado atual do carrinho (ex: total de itens e valor total).
'use client'

import { useState } from 'react'

type Product = {
  id: string
  name: string
  price: number
}

const products: Product[] = [
  { id: '1', name: 'Pizza', price: 10 },
  { id: '2', name: 'Burger', price: 5 },
  { id: '3', name: 'Soda', price: 2 }
]

const SalesPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Available Items</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {products.map((product) => (
          <div
            key={product.id}
            className='border p-4 rounded-md shadow-md flex flex-col items-center'
          >
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button
              className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <footer className='mt-8'>
        <p>Cart: {cart.length} items</p>
        <button
          className='px-4 py-2 bg-green-500 text-white rounded'
          onClick={() => (window.location.href = '/sales/cart')}
        >
          Go to Cart
        </button>
      </footer>
    </div>
  )
}

export default SalesPage
