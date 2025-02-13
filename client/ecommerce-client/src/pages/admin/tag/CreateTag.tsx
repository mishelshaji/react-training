import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import Tag from "../../../common/types/tag";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Button";
import TagService from "../../../common/services/tagService";
import {toast} from "react-toastify";

interface FormFields {
    name: string;
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(1, 'Name must be at least 1 character')
        .max(25, 'Name must be at most 25 characters'),
});

function CreateTag() {
    const { id } = useParams<{ id: string }>();
    const [_tag, setTag] = useState<Tag | null>(null);
    const { register, handleSubmit, formState, reset } = useForm<FormFields>({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            TagService.getOne(Number(id))
                .then(response => {
                    setTag(response.data.data);
                    reset({
                        name: response.data.data.name,
                    });
                })
                .catch(error => console.error("Error fetching tag:", error));
        }
    }, [id, reset]);

    const handleOnSubmit = (data: FormFields) => {
        if (id) {
            TagService.update(Number(id), data.name)
                .then(() => {
                    alert('Tag updated successfully.');
                    navigate('/admin/tag'); // Redirect after update
                })
                .catch(error => console.error("Error updating tag:", error));
        } else {
            TagService.create(data.name)
                .then(() => {
                    toast.success('Tag created successfully.');
                    navigate('/admin/tag'); // Redirect after creation
                })
                .catch(_ => {
                    toast.error('Failed to create tag.');
                });
        }
    };

    return (
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-4xl font-bold text-center'}>
                {id ? 'Update' : 'Create'} Tag
            </h1>

            <form className={'mt-10'} onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                        {...register('name')}
                    />
                    {formState.errors.name && <p className="text-red-600">{formState.errors.name.message}</p>}
                </div>

                <div className={'flex justify-end'}>
                    <Button content="Save" type="submit" severity="primary"></Button>
                </div>
            </form>
        </div>
    );
}

export default CreateTag;
