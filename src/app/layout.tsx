import BaseLayout from '@/components/layouts/BaseLayout'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Canteen Hub',
  description: 'Manage your canteen operations efficiently'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}
