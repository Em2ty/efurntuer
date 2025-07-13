import Buttons from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import React from 'react'
import { createProductFunction } from '@/utils/action';
import FormInput from '@/components/form/FormInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';


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
        
          <FormContainer action={createProductFunction}>
            <div className='grid my-4 md:grid-cols-2 gap-4'>
              <FormInput
              name='name'
              type='text'
              label='Product Name'
              />
              
              <PriceInput/>

              <ImageInput name='image' />

              <TextAreaInput
              name='description'
              labelText='description'
              />

              <div className="mt-6">
                <CheckBoxInput name='featured' label='featured'/>
              </div>
               
                <Buttons text='Create Product' className='mt-6'/>
               
            </div>
          </FormContainer>

      </div>
    </section>
  )
}

export default CreateProductPage

// 81

// 84