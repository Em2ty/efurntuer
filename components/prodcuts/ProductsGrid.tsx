import React from 'react'
import { Product } from '@prisma/client'
import Link from 'next/link';
import { links } from '@/utils/links'
import {Card,CardContent} from '../ui/card'
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from './FavoriteToggleButton';

// product is array and it contains products from the database

function ProductsGrid({ products }: { products: Product[] }) {
  
  
  return (
    <section className=' pb-14 grid pt-12 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product)=>{
        const productId= product.id;
        const dollarAMount = formatCurrency(product.price);
        const productName = product.name;
        return(
          <div className='group relative' key={product.id}>
            <Link href={`${links.PRODUCTS.href}/${productId}`}>
        <Card className="transform group-hover:shadow-xl transition-shadow duration-300">
        <CardContent>
          <div className='relative h-64 md:h-48 rounded overflow-hidden'>
            <Image fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
             src={product.image}
              alt='product image'/>
          </div>
          <div className='mt-4 text-center'>
            <h2 className='text-lg capitalize'>{productName}</h2>
            <p className='text-muted-foreground mt-2'>
              {dollarAMount}
              </p>
          </div>
        </CardContent>
        </Card>
      </Link>
      <div className="absolute top-7 right-7 z-4">
        <FavoriteToggleButton productId={productId} />
      </div>
      </div>
        )
      })}
    </section>
  )
}

export default ProductsGrid