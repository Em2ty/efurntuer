import SectionTitle from '../global/SectionTitle'
import React from 'react'
import ProductsGrid from '../prodcuts/ProductsGrid'
import { fetchFeaturedProducts } from'@/utils/action'
import EmptyList from '../global/EmptyList'


async function FeaturedProducts() {
  const featured_p = await fetchFeaturedProducts();

  if( featured_p.length === 0 ) {
    return <EmptyList title="Add New Products" />
  }

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid products={featured_p} />
    </section>
  )
}

export default FeaturedProducts