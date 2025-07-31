import React from 'react'
import FormContainer from '../form/FormContainer'
import CardSubmitButton from '../form/CardSubmitButton'
import { usePathname } from 'next/navigation'
import { toggleFavAction } from '@/utils/action'

type toggleFavActionProps = {
    productID:string,
    favoriteID:string|null,

}

 function FavoriteToggleForm({productID,favoriteID}:toggleFavActionProps) {
  
  const pathname =usePathname();

  const toggleAction= toggleFavAction.bind(null,{productID,favoriteID,pathname})
  
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteID? true : false} />
    </FormContainer>
  )
}
export default FavoriteToggleForm