import React from 'react'
import { client } from '@/app/lib/sanity';
import { simplifiedProduct } from '@/app/interface';
import ProductCard from '../ProductCard';

const Products = async () => {
  const getProductsBasedOnCategory = async () => {
    const q = `*[_type == "product"] {
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "category": category->name
    }`
  
    try {
      const data = await client.fetch(q);
      console.log("data : ", data);
      return data;
    } catch (error) {
      console.error("Error fetching products based on category from sanity, ", error);
      throw error;
    }
  }

  const data: simplifiedProduct[] = await getProductsBasedOnCategory();

  if (data.length === 0) {
    return <div className="text-center">No products found</div>
  }

  return (
      <div className={`mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8`}>
          {
            data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          }
      </div>
  )
}

export default Products