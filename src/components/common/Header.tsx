'use client'

import { Bell, User } from 'lucide-react'
import { Button } from '../ui/button'
import Sidebar from './Sidebar'

export default function Header() {
  return (
    <header className='flex items-center justify-between p-4 bg-blue-900 text-white'>
      <Sidebar />
      <div className='flex items-center space-x-4'>
        <Button variant='ghost' size='icon' className='text-white'>
          <Bell className='h-6 w-6' />
        </Button>
        <Button variant='ghost' size='icon' className='text-white'>
          <User className='h-6 w-6' />
        </Button>
      </div>
    </header>
  )
}
