
'use server';
import { redirect } from 'next/navigation';
import db from './db';
// fetch all featured products
export async function fetchFeaturedProducts() {
    const product= await db.product.findMany({
        where: {
            featured: true,
        }
        
    });
    return product;
} 

// fetch all products
export async function fetchAllProducts({search = ''}: {search?: string}) {
    const products = await db.product.findMany({
       
       where: {
        OR:[
            {
                name:{contains: search, mode: 'insensitive'},
            }
        ]
       },
        orderBy: {
            createdAt: 'desc',
        },
        
    });
    return products;
    
} 

// find product
export async function fetchSingleProduct(productID: string){
    const product = await db.product.findUnique({
        where: {
            id: productID
        },
    });
    
    if (!product) {
        redirect('/products');
    }
    return product;
}


// export async function fetchSingleProduct(productID: string) {
//   const product = await db.product.findUnique({
//     where: { id: productID },
//   });

//   if (!product) {
//     redirect('/products');
//   }

//   return product;
// }
