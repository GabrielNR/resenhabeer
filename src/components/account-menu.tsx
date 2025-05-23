import { Building, ChevronDown, LogOut } from 'lucide-react'
// import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
// import { signOut } from '../api/sign-out'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  const navigate = useNavigate()

  function signOut() {
    navigate('/sign-in')
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Resenha Beer
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Resenha beer</span>
          <span className="text-xs font-normal text-muted-foreground">
            resenha@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-rose-500 dark:text-rose-400"
          asChild
        >
          <button  className="w-full" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}