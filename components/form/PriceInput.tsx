import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'


interface PriceFormatProps{
  name?: string,
  defaultValue?:number
}

function PriceInput({name='price',defaultValue}:PriceFormatProps) {
  return (
    <div className='mb-2'>
      <Label className='capitalize mb-4' htmlFor='price'>
        Price
      </Label>
      <Input id={name || 'price'}
       name={name || 'price'}
        type='number' 
        min={0}
        defaultValue={defaultValue||30}
        required
        />
    </div>
  )
}

export default PriceInput