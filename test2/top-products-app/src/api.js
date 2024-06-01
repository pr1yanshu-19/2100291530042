import axios from 'axios';

const BASE_URL = 'https://your-backend-api-url.com'; 

export const getTopProducts = async (params) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/top`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching top products:', error);
        return [];
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        return null;
    }
};

export default { getTopProducts, getProductById };
