'use client'

import { PATHS } from '@/constants/paths'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export default function Sidebar() {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='text-white'>
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='w-[240px] sm:w-[300px] bg-blue-900 text-white p-0'
      >
        <nav className='flex flex-col h-full'>
          <div className='p-4 border-b border-blue-800'>
            <h1 className='text-2xl font-bold'>Cantina App</h1>
          </div>
          <ul className='flex-1 p-4 space-y-2'>
            <li>
              <Button
                onClick={() => router.push(PATHS.inventory.products.base)}
                variant='ghost'
                className='w-full justify-start text-white hover:bg-blue-800'
              >
                Produtos
              </Button>
            </li>
            <li>
              <Button
                variant='ghost'
                onClick={() => router.push(PATHS.attendees.clients)}
                className='w-full justify-start text-white hover:bg-blue-800'
              >
                Clientes
              </Button>
            </li>
            {/* <li>
              <Button
                variant='ghost'
                className='w-full justify-start text-white hover:bg-blue-800'
              >
                Relatórios
              </Button>
            </li> */}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
