
import FavoriteToggleButton from '@/components/prodcuts/FavoriteToggleButton';
import AddtoCart from '@/components/single-prodcut/AddtoCart';
import BreadCrumbs from '@/components/single-prodcut/BreadCrumbs';
import ProductRating from '@/components/single-prodcut/ProductRating';
import { fetchSingleProduct } from '@/utils/action'
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import React from 'react'



 async function ProductDetailsPage({params}:any) {

  const { id } = await params;
  const product = await fetchSingleProduct(id) 
  const dollarAmount = formatCurrency(product.price);
  
 console.log(product);

  return (
    <section>
      <BreadCrumbs name={product?.name} />
      <div className='grid lg:grid-cols-2 mt-6 gap-y-6 lg:gap-x-12'>

        {/* Imag */}
          <div className='relative h-full '>
            <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className='w-full rounded-md object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            </div>

            {/* product Info */}
          <div >
                <div className='flex gap-x-8 items-center'>
                  <h2 className='capitalize text-3xl font-bold'>{product.name}</h2>
                  <FavoriteToggleButton productId={product.id}/>
                </div>
                <ProductRating productID={product.id}/>
                <h4 className='text-md p-2 mt-3 rounded-md bg-muted inline-block'>{dollarAmount}</h4>
                <p className='mt-6 text-md leading-8'>
                    {product.description}
                </p>
                <AddtoCart productID={product.id}/>
          </div>

      </div>
    </section>
  )
}





export default ProductDetailsPage