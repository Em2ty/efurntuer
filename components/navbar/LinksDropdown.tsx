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
import UserIcon from './UserIcon';
import SignOutLink from './SingOutLink';
import { SignedIn, SignedOut, SignInButton ,SignUpButton} from '@clerk/nextjs';

function LinksDropdown() {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button  variant={'outline'} className='flex max-w-[100px] gap-4 cursor-pointer'>
      <LuAlignLeft className='h-6 w-6' />
        <UserIcon/>
      
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
    
    <SignedOut>
          <DropdownMenuItem>
              <SignInButton mode='modal'>
                <Button className='w-full cursor-pointer'>
                  Sign-In
                </Button>
              </SignInButton>
              
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode='modal'>
                <Button variant={"outline"} className='w-full cursor-pointer'>
                  Sign-Up
                </Button>
              </SignUpButton>
          </DropdownMenuItem>

    </SignedOut>
    
    <SignedIn>
          {dropDownMenuLinks.map((link) => (
      <DropdownMenuItem  key={link.name}>
        <Link href={link.href}>
          {link.name}
        </Link>
      </DropdownMenuItem>
    ))}
    <DropdownMenuSeparator/>
    <DropdownMenuItem>
      <SignOutLink/>
    </DropdownMenuItem>
    </SignedIn>


  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default LinksDropdown

// 25