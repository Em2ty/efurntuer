import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from 'next/link';
import { fetchAdminPosts } from '@/utils/action';
import { formatCurrency } from '@/utils/format';
import { links } from '@/utils/links';
import IconButton from '@/components/admin/products/IconButton'
import FormContainer from '@/components/form/FormContainer';
import { deleteProductAction } from '@/utils/action';

async function ProductsPage() {
  const getPosts = await fetchAdminPosts(); 

  const total= getPosts.length;
  return (
    <section>
      <Table>
              <TableCaption>Total Products {total}</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead >Product Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {getPosts.map((product)=>{
                  
                  const {id,name,price}= product;
                  const priceFormat = formatCurrency(price);
                  
                  return (
                    <TableRow key={id}>
                  <TableCell className="font-medium">
                      <Link href={`${links.PRODUCTS.href}/${id}`} className='underline text-muted-foreground hover:text-white tracking-wide capitalize'>
                      {name}
                      </Link>
                    </TableCell>
                  <TableCell> {priceFormat}</TableCell>
                  <TableCell className='flex gap-1 items-center'> 
                    <IconButton actionType='edit'/>
                    <DeleteProduct productID={id} />
                    
                    </TableCell>
                  
                </TableRow>
                  )
                })}
              </TableBody>
      </Table>
    </section>
  )
}

// 92


function DeleteProduct({productID}:{productID:string}){
  const delete_Product= deleteProductAction.bind(null,{productID});
  return(
    <FormContainer action={delete_Product}>
      <IconButton actionType='delete'/>
  </FormContainer>
  )
}



export default ProductsPage