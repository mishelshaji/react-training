import {useEffect, useState} from "react";
import AlertPrimary from "../../components/alerts/AlertPrimary.tsx";
import {Link} from "react-router";
import httpClient from "../../common/httpClient.ts";
import Product from "../../common/types/product.ts";

function ListProduct(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        httpClient.get<Product[]>('/product')
            .then(response => setProducts(response.data));
    }, []);

    return(
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Product List</h1>

            <div className={'flex justify-end'}>
                <Link to="create" className={'underline'}>+ Create Product</Link>
            </div>

            <table className={'min-w-full border border-gray-200 mt-16'}>
                <thead>
                <tr>
                    <th className={'border border-gray-200 py-2'}>Image</th>
                    <th className={'border border-gray-200 py-2'}>Id</th>
                    <th className={'border border-gray-200 py-2'}>Name</th>
                    <th className={'border border-gray-200 py-2'}>Price</th>
                    <th className={'border border-gray-200 py-2'}>Description</th>
                    <th className={'border border-gray-200 py-2'}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.length === 0 && (
                    <tr>
                        <td colSpan={6}>
                            <AlertPrimary message={'No Products.'}/>
                        </td>
                    </tr>
                )}

                {products.length > 0 && (
                    products.map((product) => (
                        <tr className={'border border-gray-200'} key={product.id}>
                            <td className={'border border-gray-200 p-2'}>{product.imageUrl}</td>
                            <td className={'border border-gray-200 p-2'}>{product.id}</td>
                            <td className={'border border-gray-200 p-2'}>{product.name}</td>
                            <td className={'border border-gray-200 p-2'}>{product.price}</td>
                            <td className={'border border-gray-200 p-2'}>{product.description}</td>
                            <td className={'border border-gray-200 p-2'}>
                                <Link to={`edit/${product.id}`} className={'text-indigo-600'}>Edit</Link>
                                |
                                <Link to={`edit/${product.id}`} className={'text-red-600'}>Delete</Link>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ListProduct
