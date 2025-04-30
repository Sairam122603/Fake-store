// app/layout.tsx - Root layout component
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FakeStore - Modern E-commerce',
  description: 'Shop modern products with our sleek e-commerce experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              FakeStore
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600">
                    Categories
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <div className="flex-grow">
          {children}
        </div>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-4">FakeStore</h2>
                <p className="text-gray-400">
                  Your destination for modern e-commerce.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white">
                      Categories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} FakeStore. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}