import {useParams} from "react-router";
import {useEffect, useState} from "react";
import httpClient from "../../common/httpClient.ts";
import Category from "../../common/types/category.ts";
import {useForm} from "react-hook-form";

interface FormFields {
    name: string;
    description: string;
}

function CreateCategory(){
    const {id} = useParams<{id: string}>();
    const [category, setCategory] = useState<Category | null>(null);
    const {register, handleSubmit, formState} = useForm<FormFields>();

    useEffect(()=>{
        if(id){
            httpClient.get<Category>(`/category/${id}`)
                .then(response => setCategory(response.data))
        }
    },[])

    const handleOnSubmit = (data: FormFields) => {
        console.log(data);
    }

    return(
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-4xl font-bold text-center'}>
                {id ? 'Update' : 'Create'} Category
            </h1>

            <form className={'mt-10'} onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           {...register('name', {
                               required: 'Name is required',
                               minLength: {
                                   value: 3,
                                   message: 'Name must be at least 3 characters'
                               },
                               maxLength: {
                                   value: 25,
                                   message: 'Name must be at most 25 characters'
                               },
                           })}
                           value={category?.name}
                    />

                    {formState.errors.name && <p className="text-red-600">{formState.errors.name.message}</p>}
                </div>

                <div>
                    <label>Description</label>
                    <textarea rows={3}
                              className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                              {...register('description', {
                                  required: 'Description is required',
                                  minLength: {
                                      value: 3,
                                      message: 'Description must be at least 3 characters'
                                  },
                                  maxLength: {
                                      value: 255,
                                      message: 'Description must be at most 255 characters'
                                  },
                              })}
                              value={category?.description}></textarea>

                    {formState.errors.description && <p className="text-red-600">{formState.errors.description.message}</p>}
                </div>

                <div className={'flex justify-end'}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCategory
