import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

interface CheckboxProps{
  name:string,
  defaultChecked?: boolean,
  label:string,
}

function CheckBoxInput({name,defaultChecked=false,label}:CheckboxProps) {
  return (
    <div className='flex items-center gap-2 mb-4'>
        <Checkbox 
          id={name}
          name={name}
          defaultChecked={defaultChecked}
        />
        
        <Label 
          htmlFor={name} 
          className='text-sm  leading-none capitalize'>
          {label }
        </Label>
      
      
    </div>
  )
}

export default CheckBoxInput