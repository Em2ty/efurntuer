import { fetchAllProducts } from '@/utils/action'
import React from 'react'
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { LuLayoutGrid,LuList } from 'react-icons/lu';
import { icons } from 'lucide-react';
import Link from 'next/link';
import { links } from '@/utils/links';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';

async function ProductsContainer({layout, search}: {layout: string, search: string}) {

  const totalProducts = await fetchAllProducts({search}) ;
  const lengthProducts = totalProducts.length;
  const searchTerm = search ? `&search=${search}` : '';
  return (
    
    <>
    {/* header */}
    <section>
    <div className='flex items-center justify-between py-4 px-2'>
      <h4>
        {lengthProducts} Product{ lengthProducts > 1 && 's'}
      </h4>
      <div className='flex items-center gap-4'>
        
        {/* but1 */}

        <Button asChild variant={layout === 'grid' ? 'default' : 'outline'}  size={'icon'}>
          <Link href={`${links.PRODUCTS.href}?layout=grid${searchTerm}`}>
            <LuLayoutGrid/>
          </Link>
        </Button>

        {/* but2 */}

        <Button asChild variant={layout === 'list' ? 'default' : 'outline'} size={'icon'}>
          <Link href={`${links.PRODUCTS.href}?layout=list${searchTerm}`}>
            <LuList/>
          </Link>
        </Button>
      </div>
    </div>
      <Separator className='mt-4'/>
    </section>
    
    {/* Products */}
    <section>
      {
      totalProducts.length === 0 ? (
        <h5> Sorry, no Product Matched</h5>
      ) : layout === 'grid' ? (
        <ProductsGrid products={totalProducts} />
      ) : (
        <ProductsList products={totalProducts} />
      )
    }
    </section>
    
    </>
  )
}

export default ProductsContainer


// 48