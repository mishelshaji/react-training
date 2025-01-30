import {useEffect, useState} from "react";
import AlertPrimary from "../../components/alerts/AlertPrimary.tsx";
import {Link} from "react-router";

function ListCategory(){
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const target = 'http://localhost:8000/api/category';
        fetch(target)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

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
                        <tr className={'border border-gray-200'}>
                            <td className={'border border-gray-200 p-2'}>{category.id}</td>
                            <td className={'border border-gray-200 p-2'}>{category.name}</td>
                            <td className={'border border-gray-200 p-2'}>{category.description}</td>
                            <td className={'border border-gray-200 p-2'}>
                                Edit | Delete
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
