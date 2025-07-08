import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function ImageInput({name}:{name:string}) {
  return (
    <div className='mb-2'>
        <Label htmlFor='{name}' className='capitalize mb-2'>
          Image
        </Label>

        <Input
        id={name}
        name={name}
        type='file'
        required
        accept='image/*'
        
        />
    </div>
  )
}

export default ImageInput