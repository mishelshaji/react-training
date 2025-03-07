import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import Category from "../../../common/types/category.ts";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "../../../components/Button.tsx";
import CategoryService from "../../../common/services/categoryService.ts";
import {toast} from "react-toastify";

interface FormFields {
    name: string;
    description: string;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
        .min(3, 'Name must be at least 3 characters')
        .max(25, 'Name must be at most 25 characters'),
    description: Yup.string().required('Description is required')
        .min(3, 'Description must be at least 3 characters')
        .max(255, 'Description must be at most 255 characters'),
})

function CreateCategory(){
    const {id} = useParams<{id: string}>();
    const [_category, setCategory] = useState<Category | null>(null);
    const {register, handleSubmit, formState, reset} = useForm<FormFields>({
        mode: 'all',
        resolver: yupResolver(validationSchema)
    });
    const navigate = useNavigate();


    useEffect(()=>{
        if(id){
            CategoryService.getOne(Number(id))
                .then(response => {
                    setCategory(response.data.data);
                    reset({
                        name: response.data.data.name,
                        description: response.data.data.description
                    });
                })
        }
    },[])

    const handleOnSubmit = (data: FormFields) => {
        if(!id){
            CategoryService.create(data.name, data.description)
                .then(_ => {
                    toast.success('Category created successfully.');
                    navigate('/admin/category');
                });
        }
        else{
            CategoryService.update(Number(id), data.name, data.description)
                .then(_ => {
                    toast.success('Category updated successfully.');
                    navigate('/admin/category');
                });
        }
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
                           {...register('name')}
                    />

                    {formState.errors.name && <p className="text-red-600">{formState.errors.name.message}</p>}
                </div>

                <div>
                    <label>Description</label>
                    <textarea rows={3}
                              className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                              {...register('description')}></textarea>

                    {formState.errors.description && <p className="text-red-600">{formState.errors.description.message}</p>}
                </div>

                <div className={'flex justify-end'}>
                    <Button content="Save" type="submit" severity="primary"></Button>
                </div>
            </form>
        </div>
    )
}

export default CreateCategory
