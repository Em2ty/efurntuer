import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { links } from '@/utils/links'
import { LuShoppingCart } from 'react-icons/lu'

function CartButton() {
  const cartItems = 9; 
  return (
    <Button 
    asChild 
    variant={'outline'} 
    size="icon"
    className=" flex justify-center items-center relative">
      <Link href={links.CART.href}>
      <LuShoppingCart/>
        <span className="absolute -top-3 -right-3 inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-blue-500 rounded-full">
          {cartItems}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton

// 22 end