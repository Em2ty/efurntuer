import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import db from '@//utils/db'

async function HeroCarousel() {
  const hero = await db.hero.findMany()
  
  return (
    <div className='lg:block hidden'>
      <Carousel>
          <CarouselContent>
        {
          hero.map((item) => (
              <CarouselItem key={item.id}>
                <div className='p-2 border-1 border-gray-500 rounded-lg'>
                  <Image
                   width={400} 
                   height={400} 
                   priority
                    alt='hero image'
                      src={item.image}
                      className='object-cover w-full h-[440px] rounded-lg'
                      />
                </div>
              </CarouselItem>
          ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
      </Carousel>
    </div>
  )
}
// 38
export default HeroCarousel