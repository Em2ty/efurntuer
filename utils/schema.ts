import {z,ZodSchema} from 'zod';

export const productSchema= z.object({
    name: z.string().min(3,{
        message:"name must be 3Ch"
    }).max(30,{
        message:"name must be lass then 30Ch"
    }),



    description: z.string().refine((description)=>{
        const wordCont = description.split(" ").length;
        return wordCont >= 10 && wordCont<=500
    },{
        message:"description must be between 10 and 500 words"
    } ),
    price: z.coerce.number().min(0,{
        message: "price must be a positive number."
    }),
    featured: z.coerce.boolean(),

})



    export function validateSchema<T>(
        schema:ZodSchema<T>,
        data:unknown
    ):T{

        const result = schema.safeParse(data);

        if(!result.success){
            const error = result.error.errors.map((e)=>e.message);
            throw new Error(error.join(','));
    }
    return result.data;
}


export const imageSchema = z.object({
    image : validateImageFile(),
});


function validateImageFile(){
    const imageSize = 1024 * 1024;
    const acceptedFileType = ['image/'];

    return z.instanceof(File)
    .refine((file)=>{
        return !file || file.size <=imageSize;
    },"File size must be less than 1 MB")

    .refine((file)=>{
        return !file || acceptedFileType.some((type)=>file.type.startsWith(type));
    },"File must be an image")

}

// 88