// #page that creates a new sales
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const NewSalePage: React.FC = () => {
  const router = useRouter()

  const [saleDetails, setSaleDetails] = useState({
    customerName: '',
    saleDescription: '',
    totalAmount: 0,
    items: [{ id: 1, name: '', quantity: 1, price: 0 }]
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setSaleDetails((prev) => ({
      ...prev,
      [name]: name === 'totalAmount' ? parseFloat(value) : value
    }))
  }

  const handleItemChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedItems = saleDetails.items.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: field === 'quantity' || field === 'price' ? +value : value
          }
        : item
    )
    setSaleDetails((prev) => ({
      ...prev,
      items: updatedItems
    }))
  }

  const handleAddItem = () => {
    setSaleDetails((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: prev.items.length + 1, name: '', quantity: 1, price: 0 }
      ]
    }))
  }

  const handleRemoveItem = (index: number) => {
    setSaleDetails((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = () => {
    console.log('New Sale Created:', saleDetails)
    alert('New Sale Created Successfully!')
    router.push('/sales/summary') // Redireciona para a página de resumo após a criação
  }

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>Create New Sale</h1>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium'>Customer Name</label>
          <input
            type='text'
            name='customerName'
            value={saleDetails.customerName}
            onChange={handleInputChange}
            placeholder='Enter customer name'
            className='w-full border rounded px-3 py-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Sale Description</label>
          <textarea
            name='saleDescription'
            value={saleDetails.saleDescription}
            onChange={handleInputChange}
            placeholder='Enter sale description'
            className='w-full border rounded px-3 py-2'
          />
        </div>
        <div>
          <h2 className='text-lg font-medium mb-2'>Items</h2>
          {saleDetails.items.map((item, index) => (
            <div key={item.id} className='flex space-x-4 items-center mb-2'>
              <input
                type='text'
                placeholder='Item name'
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, 'name', e.target.value)
                }
                className='flex-1 border rounded px-3 py-2'
              />
              <input
                type='number'
                placeholder='Quantity'
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, 'quantity', +e.target.value)
                }
                className='w-20 border rounded px-3 py-2 text-center'
              />
              <input
                type='number'
                placeholder='Price'
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, 'price', +e.target.value)
                }
                className='w-24 border rounded px-3 py-2 text-center'
              />
              <button
                onClick={() => handleRemoveItem(index)}
                className='text-red-500 hover:underline'
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={handleAddItem}
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Add Item
          </button>
        </div>
        <div>
          <label className='block text-sm font-medium'>Total Amount</label>
          <input
            type='number'
            name='totalAmount'
            value={saleDetails.totalAmount}
            onChange={handleInputChange}
            placeholder='Enter total amount'
            className='w-full border rounded px-3 py-2'
          />
        </div>
        <button
          onClick={handleSubmit}
          className='w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Create Sale
        </button>
      </div>
    </div>
  )
}

export default NewSalePage
