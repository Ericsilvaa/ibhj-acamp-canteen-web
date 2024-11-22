'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { menuItems } from '@/constants/MenuItems'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  canteenId?: string
}

export default function Sidebar({
  open,
  setOpen,
  canteenId = '1'
}: SidebarProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const SidebarContent = (
    <ScrollArea className='h-full'>
      <div className='px-6 py-4 border-b'>
        <h2 className='text-lg font-semibold'>Canteen Hub</h2>
      </div>
      <nav className='px-3 py-2'>
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href(canteenId)}
            className={cn(
              'flex items-center h-10 px-3 rounded-md text-sm font-medium transition-colors',
              pathname === item.href(canteenId)
                ? 'bg-secondary text-secondary-foreground'
                : 'text-muted-foreground hover:bg-secondary/50'
            )}
            onClick={() => setOpen(false)}
          >
            <item.icon className='w-5 h-5 mr-3' />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </ScrollArea>
  )

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side='left' className='p-0 w-[240px]'>
        {SidebarContent}
      </SheetContent>
    </Sheet>
  )
}
