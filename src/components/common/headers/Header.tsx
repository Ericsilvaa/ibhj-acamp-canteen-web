'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Bell, Menu, Search } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  onMenuToggle: () => void
  userName: string
  userAvatar?: string
}

export default function Header({
  onMenuToggle,
  userName,
  userAvatar
}: HeaderProps) {
  const [searchVisible, setSearchVisible] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto px-6'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Button
              variant='ghost'
              size='icon'
              onClick={onMenuToggle}
              aria-label='Toggle menu'
            >
              <Menu className='h-6 w-6' />
            </Button>
            <span className='text-xl font-bold'>Canteen Hub</span>
          </div>

          <div className='flex items-center space-x-4'>
            {searchVisible ? (
              <div className='relative'>
                <Input
                  type='search'
                  placeholder='Search...'
                  className='w-full max-w-[300px]'
                />
                <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground' />
              </div>
            ) : (
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setSearchVisible(true)}
                aria-label='Open search'
              >
                <Search className='h-6 w-6' />
              </Button>
            )}

            <Button variant='ghost' size='icon' aria-label='Notifications'>
              <Bell className='h-6 w-6' />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative h-10 w-10 rounded-full'
                >
                  <Avatar className='h-10 w-10'>
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {userName}
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      user@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
