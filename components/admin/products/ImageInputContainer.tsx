'use client'
import Buttons from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import ImageInput from '@/components/form/ImageInput'
import { Button } from '@/components/ui/button'
import { actionFunction } from '@/utils/type'
import Image from 'next/image'
import React, { useState } from 'react'

 type ImageInputContainerProps = {
    image: string,
    name: string,
    action: actionFunction,
    text:string,
    children?: React.ReactNode,
 }


function ImageInputContainer(props:ImageInputContainerProps){
    
    const {image, name, action, text ,children} = props

    const [isUpdatsFormVisible,setisUpdatsFormVisible] = useState(false);

    return (
        <div className='mb-8'>
            <Image 
            src={image}
            alt={name}
            width={200}
            height={200}
            className='rounded-md boject-cover mb-4 w-[200px] h-[200px]'
            />

            <Button 
            variant={'outline'} 
            size={'sm'}
            className='hover:cursor=pointer'
            onClick={()=> setisUpdatsFormVisible(prev =>!prev)}
            >
                    {text}
            </Button>

            {isUpdatsFormVisible &&(
                <div className="max-w-md mt-4">

                <FormContainer action={action}>
                    {children}
                    <ImageInput name='image'/>
                    <Buttons size='sm'/>
                </FormContainer>

            </div>
            )}

        </div>
    )
}

export default ImageInputContainer