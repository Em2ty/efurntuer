import React from 'react'
import {useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react';
import { FaRegHeart,FaHeart } from 'react-icons/fa6';

function CardSubmitButton({isFavorite}: {isFavorite: boolean}) {

    const {pending}= useFormStatus();
  
    return (
        <Button
          size={'icon'}
          type='button'
          asChild
          className='p-2 cursor-pointer bg-gray-700 hover:bg-gray-900 text-white rounded-xl shadow-md transition duration-200'
        >
            {pending ? (
                <Loader2 className='animate-spin w-4 h-4' />
            ) : isFavorite ? (<FaHeart/>) : (<FaRegHeart/>)
         }
        </Button>
    )
}

export default CardSubmitButton


// 101