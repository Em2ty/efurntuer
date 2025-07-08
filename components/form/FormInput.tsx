import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
}

function FormInput(
  { 
    name,
     type,
      label,
       defaultValue,
        placeholder 
  }: FormInputProps
) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize mb-4'>
        {label || name}
      </Label>
      <Input
        name={name}
        id={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />

    </div>
  )
}

export default FormInput