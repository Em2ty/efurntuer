'use client'
import React, { useActionState , useEffect }  from 'react'
import { toast } from 'sonner';
import {actionFunction} from '@/utils/type'
import {useTransition} from 'react';
import { useRouter } from 'next/navigation';

interface FormContainerProps {
  children: React.ReactNode;
  action:actionFunction
}



function FormContainer({ children,action }: FormContainerProps) {
  
  const initializeState ={
  message: "",
    }

  const [state, formAction] = useActionState(action,initializeState);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(()=>{

    if(state.message)toast(state.message);
    startTransition(()=>{
      setTimeout(()=>{
        router.refresh();
      },0);
    });
      

  },[state])

  return (
    <form action={formAction}>
      {children}
    </form>
  )
}

export default FormContainer