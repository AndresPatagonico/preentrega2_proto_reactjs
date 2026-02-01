const BASE_URL = 'https://dummyjson.com/products';

const adaptProduct = (rawProduct) => {
    return {
        id: rawProduct.id,
        name: rawProduct.title,
        img: rawProduct.thumbnail,
        price: rawProduct.price,
        category: rawProduct.category,
        description: rawProduct.description,
        stock: rawProduct.stock
    }
}

export const getProducts = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data.products.map(product => adaptProduct(product));
    } catch (error) {
        console.error("Error al buscar productos:", error);
        return [];
    }
};

export const getProductsByCategory = async (categoryId) => {
    try {
        const response = await fetch(`${BASE_URL}/category/${categoryId}`);
        const data = await response.json();
        return data.products.map(product => adaptProduct(product));
    } catch (error) {
        console.error("Error al filtrar categoría:", error);
        return [];
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}/${productId}`);
        const data = await response.json();
        return adaptProduct(data);
    } catch (error) {
        console.error("Error al buscar producto por ID:", error);
        return null;
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        return [];
    }
};