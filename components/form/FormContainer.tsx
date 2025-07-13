'use client'
import React, { useActionState , useEffect }  from 'react'
import { toast } from 'sonner';
import {actionFunction} from '@/utils/type'

interface FormContainerProps {
  children: React.ReactNode;
  action:actionFunction
}

const initializeState ={
  message: "",
}

function FormContainer({ children,action }: FormContainerProps) {
  
  const [state, formAction] = useActionState(action,initializeState);

  useEffect(()=>{

    if(state.message){
      toast("",{
        description:state.message
      })
    }

  },[state])

  return (
    <form action={formAction}>
      {children}
    </form>
  )
}

export default FormContainer