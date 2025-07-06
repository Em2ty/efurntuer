import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuAlignLeft } from 'react-icons/lu'
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {dropDownMenuLinks} from '@/utils/links';

function LinksDropdown() {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant={'outline'} className='flex max-w-[100px] gap-4'>
      <LuAlignLeft className='h-6 w-6' />
      
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
    {dropDownMenuLinks.map((link) => (
      <DropdownMenuItem  key={link.name}>
        <Link href={link.href}>
          {link.name}
        </Link>
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default LinksDropdown

// 25