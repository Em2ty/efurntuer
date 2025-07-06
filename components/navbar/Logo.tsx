import React from 'react'
import { Button } from '../ui/button'
import  Link  from 'next/link'
import { VscCode } from 'react-icons/vsc'
import { links } from '@/utils/links'

function Logo() {
  return (
    <Button size={'icon'} asChild >
      <Link href={links.HOME.href} >
        <VscCode className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo