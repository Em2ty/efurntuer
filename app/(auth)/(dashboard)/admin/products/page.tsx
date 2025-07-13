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
import { Award, Edit2 } from 'lucide-react';
import { fetchAdminPosts } from '@/utils/action';
import { formatCurrency } from '@/utils/format';
import { links } from '@/utils/links';

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
                  <TableCell> 
                    <Edit2/>
                    </TableCell>
                  
                </TableRow>
                  )
                })}
              </TableBody>
      </Table>
    </section>
  )
}

export default ProductsPage