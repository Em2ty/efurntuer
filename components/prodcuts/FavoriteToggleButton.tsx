import React from 'react'
import { Button } from '../ui/button'
import { FaH } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'

function FavoriteToggleButton({productId}: {productId: string}) {
  return (
    <Button size={'icon'} variant={'outline'} className='p-2 cursor-pointer'>
    <FaHeart />
    </Button>
  )
}

export default FavoriteToggleButton