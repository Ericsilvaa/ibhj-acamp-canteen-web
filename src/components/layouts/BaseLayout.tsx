'use client'
import { useState } from 'react'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'
import Header from '../common/headers/Header'

const userData = {
  name: 'Eriquim',
  avatarUrl: '/img/avatar-img.png'
}

export default function BaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className='flex h-screen bg-background'>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header
          onMenuToggle={toggleSidebar}
          userName={userData.name}
          userAvatar={userData.avatarUrl}
        />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-background'>
          <div className='container mx-auto px-4 py-8'>{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
