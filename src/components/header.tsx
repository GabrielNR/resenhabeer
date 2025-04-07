import { Separator } from './ui/separator'
import { ThemeToggle } from './theme/theme-toogle'
import { AccountMenu } from './account-menu'
import { NavLink } from 'react-router-dom'
import {  Home, Package, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <ShoppingCart className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/products">
            <Package className="h-4 w-4" />
            Cadastrar produtos
          </NavLink>
          <NavLink to="/sales">
            <Package className="h-4 w-4" />
            Realizar Vendas
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2"> 
           <ThemeToggle /> 
           <AccountMenu /> 
        </div> 
      </div>
    </div>
  )
}