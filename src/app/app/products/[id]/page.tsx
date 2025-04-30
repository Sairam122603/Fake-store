// app/products/[id]/page.tsx - Product detail page
import { getProductById } from '@/app/lib/api';
import ProductDetails from '@/app/components/product/ProductDetails';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await getProductById(params.id);
    
    return (
      <main className="container mx-auto px-4 py-8">
        <ProductDetails product={product} />
      </main>
    );
  } catch {
    // If product not found, show 404 page
    notFound();
  }
}

// Generate metadata for the product detail page
export async function generateMetadata({ params }: ProductPageProps) {
  try {
    const product = await getProductById(params.id);
    
    return {
      title: `${product.title} - FakeStore`,
      description: product.description.substring(0, 160),
    };
  } catch {
    return {
      title: 'Product Not Found - FakeStore',
      description: 'The requested product could not be found.',
    };
  }
}