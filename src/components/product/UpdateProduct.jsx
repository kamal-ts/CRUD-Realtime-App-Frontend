import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateProduct, getProductById } from '../../ProductApi';



const UpdateProduct = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { id } = useParams();

  useEffect(() => {
    handleGetProductById(id);
  }, [])


  const handleGetProductById = async (id) => {
    const response = await getProductById(id);
    setName(response.name);
    setPrice(response.price);
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateProduct(id, {
      name,
      price: parseInt(price)
    })
    navigate('/')
  }

  return (
    <div className='flex flex-col justify-center h-screen  '>
      <div className='sm:mx-auto mx-4 sm:w-full sm:max-w-xl bg-slate-800 rounded-3xl border border-green-600 shadow-lg shadow-green-600 p-10'>

        <form className='' onSubmit={handleUpdate}>
          <div className="flex flex-col ">
            <h1 className='text-2xl text-center mb-6 text-slate-300'>Create Product</h1>
            <div className="mb-5">
              <label htmlFor="" className='font-semibold text-slate-300'>Product name</label>
              <input type="text" className='w-full p-3 mt-1 border border-slate-600 rounded-lg bg-slate-800 focus:outline-none focus:border-green-600 hover:shadow hover:shadow-green-600' placeholder='product name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className='font-semibold text-slate-300'>Price</label>
              <input type="number" className='w-full p-3 mt-1 border border-slate-600 rounded-lg bg-slate-800 focus:outline-none focus:border-green-600 hover:shadow hover:shadow-green-600' placeholder='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <button type='submit' className='text-lg font-bold px-6 py-2 mt-4 border border-green-700 text-green-600 rounded-lg hover:text-white hover:bg-green-700 hover:outline hover:outline-offset-2 hover:outline-1 hover:outline-green-400 transition duration-300 text-center'>Update</button>
            <Link to={"/"} className='text-lg font-bold px-6 py-2 mt-4 border border-red-700  rounded-lg text-white bg-red-700 hover:bg-red-600 hover:outline hover:outline-offset-2 hover:outline-1 hover:outline-red-400 transition duration-300 text-center'>Back</Link>

          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct