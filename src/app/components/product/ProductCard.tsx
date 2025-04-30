// ProductCard.tsx - Card component for displaying a product in the grid
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/lib/api';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/products/${product.id}`}
      className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="p-4 flex flex-col h-full">
        <div className="relative w-full h-48 mb-4 bg-gray-100 rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            className="p-2"
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
            {product.title}
          </h3>
          
          <p className="mt-2 text-sm text-gray-500 capitalize">
            {product.category}
          </p>
        </div>
        
        <div className="mt-4">
          <p className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}