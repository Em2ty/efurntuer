

// as a Array of objects that represent the links in the navigation bar.
 type NavBarLink = {
   name: string;
   href: string;
 };



export const dropDownMenuLinks: NavBarLink[] = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/about',
    name: 'About'
  },
  {
    href: '/products',
    name: 'Products'

  },
  {
    href: '/favorites',
    name: 'Favorites'
  }, 
  {
    href: '/cart',
    name: 'Cart'
  },
  {
    href: '/orders',
    name: 'Orders'
  },

]

// as a constant object that represents the links in the navigation bar.
// This file defines the links used in the navigation bar of the application.

export const links = {
  HOME: { href: '/', name: 'Home' },
  ABOUT: { href: '/about', name: 'About' },
  CART: { href: '/cart', name: 'Cart' },
  PRODUCTS: { href: '/products', name: 'Products' },
} as const;

// as const that represents the links in the 
// navigation bar with their names when using object .