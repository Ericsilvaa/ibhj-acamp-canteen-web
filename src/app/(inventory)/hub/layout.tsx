import BaseLayout from '@/components/layouts/BaseLayout'
import React from 'react'

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>
}
