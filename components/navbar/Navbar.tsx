import  Container  from '../global/Container'
import React, { Suspense } from 'react'
import Logo from './Logo'
import NavSearch from './NavSearch'
import CartButton from './CartButton'
import DarkMode from './DarkMode'
import LinksDropdown from './LinksDropdown'
import SignOutLink from './SingOutLink'


function Navbar() {
  return ( 
   <nav className='border-b'>
    <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8' > 
      <Logo/>

    <Suspense>
      <NavSearch/>
    </Suspense>
      <div className='flex gap-4 items-center'> 
      <CartButton/>
      <DarkMode/>
      <LinksDropdown/>
      
      </div>
      
    </Container>
   </nav>
  )
}
// 68
export default Navbar