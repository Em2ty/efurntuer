'use client'


import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

function SignOutLink() {

  const handelLogOut = ()=>{
    toast("Sign Out...")
  }
  return (
    <SignOutButton>
      <div>
      <Link href={'/'}className=' ' onClick={handelLogOut}>
      Sing Out
      </Link>
    </div>
    </SignOutButton>
  )
}

export default SignOutLink