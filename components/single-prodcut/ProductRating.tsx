import React from 'react'
import { FaStar } from 'react-icons/fa';

function ProductRating({productID }: { productID: string }) {
  const rating = 4.5;
  const reviews = 42;
  const reviewsText = `${reviews} Reviews`;
  return (
    <span className='flex gap-1 items-center text-md mt-1 mb-4'>
      <FaStar className='w-3 h-3 '/>
      {rating} {reviewsText}
    </span>
  )
}

export default ProductRating

// 59