import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { Button } from '../ui/button'

function CardSignInButton() {
  return (
    <SignInButton mode='modal'>
        <Button
          variant='default'
          size={'icon'}
          type='button'
          asChild
          className='p-2 cursor-pointer bg-gray-700 hover:bg-gray-900 text-white rounded-xl shadow-md transition duration-200'
        >
            <FaRegHeart/>
        </Button>
    </SignInButton>
  )
}

export default CardSignInButton