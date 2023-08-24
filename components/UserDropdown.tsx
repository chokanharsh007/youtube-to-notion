'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/components/providers/supabase-auth-provider'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, RefreshCcw } from 'lucide-react'
import { Icons } from '@/components/icons'

export function DropdownMenuDemo() {
  const { user, signOut, refreshToken, reconnectToNotion } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          {user?.avatar_url && <AvatarImage src={user?.avatar_url} />}
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">

        <DropdownMenuItem onClick={refreshToken} className='cursor-pointer '><span className='inline-flex items-center text-red-400 hover:text-red-600'><RefreshCcw className='w-4 h-4 mr-2' />Update Notion Token</span></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={reconnectToNotion} className='cursor-pointer '><span className='inline-flex items-center'><Icons.notion className='w-4 h-4 mr-2' />Reconnect to Notion</span></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className='cursor-pointer'><LogOut className='w-4 h-4 mr-2' />Log out</DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
