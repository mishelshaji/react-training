import Button from "../../components/Button.tsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";

function CreateCategory(){
    const {id} = useParams<{id: string}>();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8000/api/category/${id}`)
                .then(response => response.json())
                .then(data => {
                    setName(data.name);
                    setDescription(data.description);
                });
        }
    },[])

    return(
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-4xl font-bold text-center'}>
                {id ? 'Update' : 'Create'} Category
            </h1>

            <form className={'mt-10'}>
                <div>
                    <label>Name</label>
                    <input type="text"
                           className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                           required
                           value={name}
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea rows={3}
                              className={'border border-gray-400 focus:outline-2 focus:outline-indigo-200 p-2 w-full rounded'}
                              required value={description}></textarea>
                </div>

                <div className={'flex justify-end'}>
                    <Button type="submit" content="Save" severity="primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateCategory
