import axios from 'axios';

const url = 'http://localhost:5000/products';

export const getProduct = async () => {
    const response = await axios.get(url);
    return response.data;
}

export const deleteProduct = async (id) => {
    await axios.delete(`${url}/${id}`);
}

export const createProduct = async (data) => {
    const response = await axios.post(url, data);
    return response.data;
}

export const getProductById = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}

export const updateProduct = async (id, data) => {
    const response = await axios.patch(`${url}/${id}`, data);
    return response.data;
}