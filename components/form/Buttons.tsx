'use client'

import React from 'react'
import { Button } from '../ui/button'
import {cn} from '@/lib/utils'
import { useFormStatus } from 'react-dom';
import { VscLoading } from 'react-icons/vsc';

type btnSize = "lg" | "default" | "sm" | "icon"; 

interface SubmitButtonProps{
  className?:string,
  text?:string,
  size?: btnSize
}


function Buttons({className='',text="submit",size='lg'}:SubmitButtonProps) {
  
  const {pending} = useFormStatus();

  return (
    <Button 
    type='submit'
    disabled={pending}
    className={cn('capitalize', className)}
    size={size}
    >
        {
          pending ?(
            <>
             please Wait  <VscLoading className='mr-2 h-4 w-4 animate-spin'/>
            </>
          ) :
          (
            text
          )
        }
    </Button>
  )
}

export default Buttons