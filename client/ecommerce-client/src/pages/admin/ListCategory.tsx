import {SyntheticEvent, useEffect, useState} from "react";
import AlertPrimary from "../../components/alerts/AlertPrimary.tsx";
import {Link} from "react-router";
import Category from "../../common/types/category.ts";
import CategoryService from "../../common/services/categoryService.ts";

function ListCategory(){
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(()=>{
        // httpClient.get<Category[]>('/category')
        //     .then(response => setCategories(response.data));

        CategoryService.getAll()
            .then(response => setCategories(response.data.data));
    }, []);

    function handleOnDelete(event:SyntheticEvent) {
        const target = event.target as HTMLElement;
        const id = Number(target.dataset.id);

        CategoryService.delete(id)
            .then(_ => alert('Category deleted successfully.'));

        // Remove the deleted category from the list
        setCategories(categories.filter(category => category.id !== id));
    }

    return(
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Category List</h1>

            <div className={'flex justify-end'}>
                <Link to="create" className={'underline'}>+ Create Category</Link>
            </div>

            <table className={'min-w-full border border-gray-200 mt-16'}>
                <thead>
                    <tr>
                        <th className={'border border-gray-200 py-2'}>Id</th>
                        <th className={'border border-gray-200 py-2'}>Name</th>
                        <th className={'border border-gray-200 py-2'}>Description</th>
                        <th className={'border border-gray-200 py-2'}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {categories.length === 0 && (
                    <tr>
                        <td colSpan={4}>
                            <AlertPrimary message={'No categories.'}/>
                        </td>
                    </tr>
                )}

                {categories.length > 0 && (
                    categories.map((category: any) => (
                        <tr className={'border border-gray-200'} key={category.id}>
                            <td className={'border border-gray-200 p-2'}>{category.id}</td>
                            <td className={'border border-gray-200 p-2'}>{category.name}</td>
                            <td className={'border border-gray-200 p-2'}>{category.description}</td>
                            <td className={'border border-gray-200 p-2'}>
                                <Link to={`edit/${category.id}`} className={'text-indigo-600'}>Edit</Link>
                                |
                                <span className={'text-red-600'} data-id={category.id} onClick={handleOnDelete}>Delete</span>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ListCategory
