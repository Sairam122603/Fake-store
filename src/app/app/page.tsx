// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function ProductListing() {
  const products = await getProducts();

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: { id: number; title: string; category: string; price: number; image: string }) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="border p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="object-contain mx-auto h-40"
          />
          <h2 className="font-bold mt-4">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-lg font-semibold">${product.price}</p>
        </Link>
      ))}
    </main>
  );
}
