import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Canteen Hub',
  description: 'Manage your canteen operations efficiently'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-background'>
          {children}
        </main>
      </body>
    </html>
  )
}
