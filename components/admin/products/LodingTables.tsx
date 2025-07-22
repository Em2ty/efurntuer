import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function LodingTables({rows=4}) {

    const fiveRows = Array.from({length:rows},(_,index)=>{
        return (
    <div className='mb-4' key={index}>
        <Skeleton className='h-8 rounded w-full'/>
    </div>
  )
    })

    return(
        <>{fiveRows}</>
    )
  
}

export default LodingTables