import React from 'react'
import useSWR, { useSWRConfig } from 'swr';
import { Link } from 'react-router-dom';
import { getProduct, deleteProduct } from '../../ProductApi'

const ProductList = () => {

    const { mutate } = useSWRConfig();

    const { data } = useSWR('products', getProduct);
    // const { data } = useSWR('products', getProduct, { refreshInterval: 1000 });
    if (!data) return <h2>Loading.....</h2>

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        mutate('products')
    }

    

    return (
        <div className='flex flex-col py-10'>
            <div>
                <Link to={'product/create'} className='text-lg font-bold uppercase px-6 py-2 bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-indigo-300'>Create</Link>

                <div className='rounded-lg my-4 shadow-lg overflow-hidden bg-slate-800'>
                    <table className="table-auto w-full text-left ">
                        <thead className='text-indigo-400'>
                            <tr className='  text-sm uppercase bg-slate-700'>
                                <th className=' py-3 text-center'>no</th>
                                <th className=' py-3'>Name</th>
                                <th className=' py-3'>Price</th>
                                <th className='px-6 py-3 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((p, index) => (

                                <tr className=' border-b border-b-gray-600' key={index}>
                                    <td className=' py-3 text-center text-gray-600 font-bold'>{index + 1}</td>
                                    <td className=' py-3'>{p.name}</td>
                                    <td className=' py-3'>{p.price}</td>
                                    <td className=' py-3 text-center font-semibold'>
                                        <Link to={`product/${p.id}/edit`} className=' px-4 mr-2 py-1 border border-green-700 text-green-600 rounded-lg hover:text-white hover:bg-green-700 transition duration-300 '>Update</Link>
                                        <button onClick={() => handleDeleteProduct(p.id)} className=' px-4 mr-2 py-1 border border-red-700 text-red-600 rounded-lg hover:text-white hover:bg-red-700 transition duration-300 '>Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductList