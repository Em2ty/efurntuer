import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Button } from '../ui/button'

function CardSignInButton() {
  return (
    <SignInButton mode='modal'>
        <Button
          variant='outline'
          size={'icon'}
          type='button'
          asChild
          className='p2 cursor-pointer'
        >
            <FaRegHeart/>
        </Button>
    </SignInButton>
  )
}

export default CardSignInButton