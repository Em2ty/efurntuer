import { Product } from '@prisma/client'
import { links } from '@/utils/links';
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';  
import FavoriteToggleButton from './FavoriteToggleButton';

function ProductsList({products}: {products:Product[]}) {
  return (
    <section className='my-12 grid gap-y-8'>
      {/* Card */}
      {products.map((product) => {
        const productID = product.id;
        const {name, description, price, image} = product;
        const PriceFormat = formatCurrency(price);
        return(
          <div className="relative group" key={productID}>
      <Link href={`${links.PRODUCTS.href}/${productID}`} >
      <Card className='transform group-hover:shadow-lg transition-shadow duration-300'>
        <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
          <div className='relative  h-64 md:h-48 md:w-48'>
            <Image 
            src={image}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='rounded-lg object-cover' 
             alt={`image-List`}/>
          
          </div>
             <div>
          <h2 className='text-xl font-semibold capitalize'>{name}</h2>
          <p className=' mt-4 text-muted-foreground'>{description}</p>
        </div>
        <div className='flex gap-4 items-center md:flex-col justify-between text-xl text-center text-blue-500 font-semibold'>
          <p>{PriceFormat}</p>
            <div className='z-6'>
              <FavoriteToggleButton productId={productID} />
            </div>
        </div>
        </CardContent>

      </Card>
      </Link>
        
          </div>
        )
      })}
    </section>
  )
}

export default ProductsList

// 49