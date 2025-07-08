import React from 'react'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

interface TextAreaProps{
  name:string,
  labelText?:string,
  defaultValue?:string,
}

function TextAreaInput({name,labelText,defaultValue}:TextAreaProps) {
  return (
    <div className='mb-2'>
        <Label className='mb-2 capitalize' htmlFor={name}>
            {labelText || name}
        </Label>
          <Textarea
          id={name}
          name={name}
          defaultValue={defaultValue}
          required
          rows={5}
          className='leading-loose'
          
          />
    </div>
  )
}

export default TextAreaInput