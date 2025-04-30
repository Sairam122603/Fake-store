// app/products/[id]/loading.tsx - Loading state for product detail page
export default function Loading() {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 w-20 h-8 animate-pulse bg-gray-200 rounded"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
          
          <div>
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/4"></div>
            
            <div className="flex items-center mb-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              ))}
              <div className="ml-2 h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            </div>
            
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-6 w-1/4"></div>
            
            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
            </div>
            
            <div className="h-10 bg-gray-200 rounded animate-pulse w-32"></div>
          </div>
        </div>
      </main>
    );
  }