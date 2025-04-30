// api.ts - Service for handling API calls to FakeStore API

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  
  // Get all products
  export async function getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
  
  // Get a single product by ID
  export async function getProductById(id: string): Promise<Product> {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID: ${id}`);
      }
      
      return response.json();
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  }
  
  // Get all product categories
  export async function getCategories(): Promise<string[]> {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }