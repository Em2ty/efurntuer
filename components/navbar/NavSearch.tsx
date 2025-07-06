'use client';
import React from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { links } from '@/utils/links';
function NavSearch() {
  const searchParams = useSearchParams();
  const[search, setSearch] = useState(searchParams.get('search')?.toString() || '');
  const {replace}= useRouter();
  const handleSearch= useDebouncedCallback((value:string)=>{
    const params= new URLSearchParams(searchParams);
    
    if(value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`${links.PRODUCTS.href}?${params.toString()}`);
  }, 300);
  return (
    <div>
      <Input type='search'
       placeholder='Search...'
       className=' max-w-xs dark:bg-muted border-1'
       value={search}
       onChange={(e) =>{ setSearch(e.target.value)
       handleSearch(e.target.value)
        }}
       />
    </div>
  )
}

export default NavSearch