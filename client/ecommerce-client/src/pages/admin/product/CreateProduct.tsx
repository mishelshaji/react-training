import {useParams} from "react-router";
import {useEffect, useState} from "react";
import httpClient from "../../../common/httpClient.ts";
import Category from "../../../common/types/category.ts";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Product from "../../../common/types/product.ts";

interface FormFields {
    name: string;
    slug: string;
    price: number;
    imageUrl: string;
    categoryId: number;
    description: string;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(70, 'Name must be at most 70 characters'),
    slug: Yup.string().required('Slug is required')
        .matches(/^[a-z0-9-]+$/, 'Slug must be lowercase and contain only letters, numbers, and hyphens')
        .min(3, 'Slug must be at least 3 characters')
        .max(70, 'Slug must be at most 70 characters'),
    price: Yup.number().required('Price is required')
        .min(0, 'Price must be at least 0')
        .max(10000, 'Price must be at most 10000'),
    imageUrl: Yup.string().required('Image URL is required'),
    categoryId: Yup.number().required('Category is required'),
    description: Yup.string().required('Description is required')
        .min(3, 'Description must be at least 3 characters')
        .max(500, 'Description must be at most 500 characters'),
})

function CreateProduct(){
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const {register, handleSubmit, formState, reset} = useForm<FormFields>({
        disabled: false,
        mode: 'all',
        resolver: yupResolver(validationSchema)
    });


    useEffect(()=>{
        if(id){
            httpClient.get<Product>(`/product/${id}`)
                .then(response => {
                    setProduct(response.data);
                    reset({
                        name: response.data.name,
                        description: response.data.description
                    });
                })
        }

        // Fetching the categories
        httpClient.get<Category[]>('/category')
            .then(response => setCategories(response.data));
    },[])

    const handleOnSubmit = (data: FormFields) => {
        console.log(data);
    }

    return(
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-4xl font-bold text-center'}>
                {id ? 'Update' : 'Create'} Product
            </h1>

            <form className={'mt-10'} onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           {...register('name')}
                           value={product?.name}
                    />

                    {formState.errors.name && <p className="text-red-600">{formState.errors.name.message}</p>}
                </div>

                <div>
                    <label>Slug</label>
                    <input type="text"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           {...register('slug')}
                           value={product?.slug}
                    />

                    {formState.errors.slug && <p className="text-red-600">{formState.errors.slug.message}</p>}
                </div>

                <div>
                    <label>Price</label>
                    <input type="text"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           {...register('price')}
                           value={product?.price}
                    />

                    {formState.errors.price && <p className="text-red-600">{formState.errors.price.message}</p>}
                </div>

                <div>
                    <label>Image URL</label>
                    <input type="url"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           {...register('imageUrl')}
                           value={product?.imageUrl}
                    />

                    {formState.errors.imageUrl && <p className="text-red-600">{formState.errors.imageUrl.message}</p>}
                </div>

                <div>
                    <label>Category</label>
                    <select
                        className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                        {...register('categoryId')}>
                        <option>--- Select a Category ---</option>
                        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </select>

                    {formState.errors.categoryId && <p className="text-red-600">{formState.errors.categoryId.message}</p>}
                </div>

                <div>
                    <label>Description</label>
                    <textarea rows={3}
                              className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                              {...register('description')}
                              value={product?.description}></textarea>

                    {formState.errors.description &&
                        <p className="text-red-600">{formState.errors.description.message}</p>}
                </div>

                <div className={'flex justify-end'}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
