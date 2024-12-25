import React from 'react'
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Image from 'next/image';
import Link from 'next/link';
import category from '@/sanity/schemaTypes/category';

const getCategoryData = (category: string) => {
    const q = `*[_type == "product" && category->name == "${category}"] {
    _id,
        "imageUrl": images[0].asset->url,
        price,
        name,
        "slug": slug.current,
        "category": category->name
    }`;

    const data = client.fetch(q);
    return data;
}

const page = async ({params}: {params: {category: string}}) => {
    const data: simplifiedProduct[] = await getCategoryData(params.category);

  return (
    <>
        <h1 className='text-4xl font-bold ml-2 text-center mt-10'>{params.category}</h1>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8 w-[90%] mx-auto'>
            {
                data.map((product) => (
                    <div key={product._id} className='group relative'>
                        <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
                            <Image src={product.imageUrl} alt='Product Image' width={300} height={300} className='size-full object-cover object-center' />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between items-center text-2xl sm:text-xl'>
                                <h3 className='font-semibold'>
                                    <Link href={`/product/${product.slug}`} className='text-gray-700'>{product.name}</Link>
                                </h3>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default page