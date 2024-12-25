import React from 'react'
import { client } from '../lib/sanity'
import { simplifiedProduct } from '../interface';
import ProductCard from './ProductCard';

const getLatestProducts = async () => {
    const q = `*[_type == "product"][0...4] | order(_createdAt desc){
    _id,
        price,
        name,
        "slug": slug.current,
        "category": category->name,
        "imageUrl": images[0].asset->url
    }`

    const data = await client.fetch(q);
    return data;
}

const LatestProducts = async () => {
    const data: simplifiedProduct[] = await getLatestProducts();

    return (
        <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8'>
            {
                data.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))
            }
        </div>
    )
}

export default LatestProducts