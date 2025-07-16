import React from 'react'
import Buttons from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { createProductFunction, fetchSingleProduct, updateProductAction } from '@/utils/action';
import FormInput from '@/components/form/FormInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';

async function EditProductPage({params}:{params:{id:string}}) {

  const {id} = await params;
  const product = await fetchSingleProduct(id);

  const {name, description, price,featured} = product;

  return (
     <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'> Create Product</h1>
      <div className='border p-8 rounded-md'>
        
        {/* Image Container */}


          <FormContainer action={updateProductAction}>
            <div className='grid my-4 md:grid-cols-2 gap-4'>
              <input type="hidden" name='id' value={id}/>
              <FormInput
              name='name'
              type='text'
              label='Product Name'
              defaultValue={name}
              />
              
              <PriceInput defaultValue={price} />

             

              <TextAreaInput
              name='description'
              labelText='description'
              defaultValue={description}
              />

              <div className="mt-6 ">
                <CheckBoxInput  name='featured' label='featured' defaultChecked={featured}/>
              </div>

                <Buttons text='Update Product' className='mt-6 hover:cursor-pointer'/>

            </div>
          </FormContainer>

      </div>
    </section>
  )
}

export default EditProductPage

// 97