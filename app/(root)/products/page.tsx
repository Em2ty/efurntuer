import ProductsContainer from '@/components/prodcuts/ProductsContainer';
import React from 'react';

// This page is used to display products with different layouts based on the search parameters



async function ProductsPage({searchParams}: any) {

  const {layout= 'grid'} = await searchParams || {};
  const {search} = await searchParams || '';
   return (
    <ProductsContainer layout={layout} search={search} />
  )
}

export default ProductsPage


