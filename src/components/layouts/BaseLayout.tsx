'use client'

import Header from '../common/Header'

export default function BaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex h-screen bg-white'>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}
