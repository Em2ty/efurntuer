import React from 'react'
import { Button } from '../ui/button'

function AddtoCart({productID}: {productID: string}) {
  return (
    <Button size={'lg'} className='capitalize mt-8 '>
      Add to Cart
      </Button>
  )
}

export default AddtoCart