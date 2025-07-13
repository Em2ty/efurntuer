'use client'
import { Button } from '@/components/ui/button';
import { Loader2Icon, LucideEdit2 } from 'lucide-react';
import React from 'react'
import { useFormStatus } from 'react-dom'
import { LuTrash2 } from 'react-icons/lu';

type actionType = 'edit' | 'delete'

function IconButton({actionType}:{actionType:actionType}) {
    const {pending} = useFormStatus();

    const renderIcon = ()=>{
       switch(actionType){
        case 'edit':
            return <LucideEdit2/>
            case 'delete':
                return <LuTrash2/>

                default :
                throw new Error("Invalid Action Type")
       }
    }
    return (
    <Button
    size={'icon'}
    type='submit'
    variant={'link'}
    className='p-2 cursor-pointer'
    >
        {pending ? <Loader2Icon className='animate-spin' /> : renderIcon() }
    </Button>
  )
}

export default IconButton