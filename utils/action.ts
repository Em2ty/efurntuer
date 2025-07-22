
'use server';
import { redirect } from 'next/navigation';
import db from './db';
import { currentUser } from '@clerk/nextjs/server';
import { productSchema,validateSchema,imageSchema } from './schema';
import {deleteImage, uploadImage} from '@/utils/supabase'
import { revalidatePath } from 'next/cache';
import {links} from '@/utils/links'

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

    const getAuthUser = async ()=>{
        const user= await currentUser();

        if(!user){
            throw new Error("logged in first")
        }
        return user;
    }


    const renderError= (error:unknown):{message:string}=>{
        return{
            message: error instanceof Error? error.message : "Unknown Error"
        }
    }


    export const createProductFunction = async(
     prevState:any,
    formData: FormData,):Promise<{message:string} >=>{

        const user =await getAuthUser();

        try{
            const rowData = Object.fromEntries(formData);

            const validateData= validateSchema(productSchema,rowData)

            const file = formData.get('image') as File;
            const validateImage = validateSchema(imageSchema,{image:file})
 
            const fullImagePath = await uploadImage(validateImage.image);

                await db.product.create({
                data:{
                    ...validateData,
                    
                    image:fullImagePath,

                    clrekId:user.id

                }
            });
            return{message:"Product Created"}
        }
        catch(error){
            return renderError(error);
        }


}


// get admin user

const getAdminUser = async()=>{
    const user = await getAuthUser();
    if(user.id !== process.env.ADMIN_USER_ID) redirect("/");
    return user;
}

export const fetchAdminPosts = async ()=>{
    await getAdminUser();
    const user = await getAuthUser();
    const products = await db.product.findMany({
        
        //only posts careated by Admin
        // where:{
        //     clrekId: user.id  
        // },
        
        orderBy:{
            createdAt: 'desc'
        }
    });
    return products;
}


export const deleteProductAction =async (prevState : {productID:string})=>{
     const {productID} = prevState; //id product
     await getAdminUser();
     try{
        const product =  await db.product.delete({
            where:{
                id:productID
            }
        });

        await deleteImage(product.image)
        // revalidatePath('/admin/product');
        return {message: "Product Removed"}
     }
     catch(e){
        return renderError(e);
     }
}

export const updateProductAction = async (prevState:any, formData: FormData)=>{
    
    await getAdminUser();

    try{
        const productID = formData.get('id') as string;
        const rowData = Object.fromEntries(formData);

        const validateData = validateSchema(productSchema,rowData);

        await db.product.update({
            where:{
                id:productID
            },
            data:{
                ...validateData
            }
        });
        revalidatePath(`${links.AdminProducts.href}`)
        return {message: "Product Updated Successfully !"}
    }

    catch(e){
        return renderError(e);
    }
    
    
}

export const updateProductImageAction= async (prevStat:any,formdata:FormData)=>{

    await getAuthUser ();
    try{
        const image = formdata.get('image') as File;
        const productID = formdata.get('id') as string;
        const OLdImageUrl = formdata.get('url') as string;
        
        const validateFile = validateSchema(imageSchema,{image});

        const fullPath = await uploadImage(validateFile.image);
        await deleteImage(OLdImageUrl);
        await db.product.update({
            where:{
                id:productID
            },
            data:{
                image:fullPath
            }
        });
        revalidatePath(`${links.AdminProducts.href}/${productID}/edit`);
        return {
            message:'image updated successfully'
        }
    }


    catch(e){
        return renderError(e)
    }

}

// 98