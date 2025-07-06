import React, { Suspense } from 'react'
import HeroCarousel from './HeroCarousel'
import { Button } from '../ui/button'
import Link from 'next/link'
import LoadingContainer from '../global/LoadingContainer'
function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2  gap-24  items-center'>
      <div >
        <h1 className="max-w-2xl font-bold text-5xl tracking-tight sm:text-6xl"> 
          We are changing the way people shop
        </h1>
        <p className='mt-8 text-lg max-w-xl leading-8 text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
           quasi vel perspiciatis nesciunt ex quibusdam soluta voluptates, odio, 
           dolores veniam vero eum eligendi assumenda nemo harum consectetur explicabo natus 
           sapiente!</p>


           <Button asChild size={'lg'} className='bg-blue-500 mt-10 text-white hover:bg-blue-600'>
            <Link href={"/products"}> 
            Our Products
            </Link>
           </Button>


      </div>
      <Suspense fallback={<LoadingContainer />}>
        <HeroCarousel />
      </Suspense>
    </section>
  )
}

export default Hero