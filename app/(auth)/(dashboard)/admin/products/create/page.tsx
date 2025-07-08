import React from 'react'


async function createNewProduct(formData:FormData){
    'use server';
    const name= formData.get('name') as String;
    console.log(name);
  }


function CreateProductPage() {
  
 
  
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'> Create Product</h1>
      <div className='border p-8 rounded-md'>
        <form >
          
        </form>
      </div>
    </section>
  )
}

export default CreateProductPage

// 81