'use client'
import React from 'react'
import { Button } from '../ui/button'
import { FaRegHeart } from 'react-icons/fa'
import { useUser } from '@clerk/nextjs';
import CardSignInButton from '../form/CardSignInButton';
import FavoriteToggleForm from './FavoriteToggleForm';

function FavoriteToggleButton({productId}: {productId: string}) {

  const {isSignedIn}= useUser();

  if (!isSignedIn) return <CardSignInButton/>
  
  return (
   <FavoriteToggleForm productID={productId} favoriteID={null}/>
  )
}

export default FavoriteToggleButton