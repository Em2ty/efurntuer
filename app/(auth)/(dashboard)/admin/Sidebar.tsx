'use client'

import { Button } from '@/components/ui/button'
import { adminLinks } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SidebarComponent() {
  
  const path_url= usePathname();

  return (
    
      <aside>
       {adminLinks.map(function(value){
        const active_page= value.href=== path_url;
        return(
           <Button 
           key={value.name}
           variant={active_page? 'default' : 'ghost'} 
           asChild 
           className='w-full mb-2 capitalize justify-start'> 
          <Link  href={value.href}>
          {value.name}
          </Link>
        </Button>
        )
       })
       
       }
      </aside>
    
  )
}

export default SidebarComponent