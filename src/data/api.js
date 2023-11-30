import axios from 'axios';

const baseURL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL,
});

export const fetchProducts = async (category) => {

  try {

    const response = category

      ? await api.get(`/products/category/${category}`)

      : await api.get("/products");



    if (!response.data || !Array.isArray(response.data)) {

      console.error(

        "Error fetching products: Response data is not in the expected format",

        response.data

      );

      throw new Error("Unexpected response format");

    }



    return response.data.map((product) => ({

      id: product.id,

      title: product.title,

      price: product.price,

      category: product.category,

      description: product.description,

      image: product.image,

    }));

  } catch (error) {

    console.error("Error fetching products:", error);

    throw error;

  }

};



export default api;