import React from 'react'
import { simplifiedProduct } from '../interface'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({product}: {product: simplifiedProduct}) => {
  return (
    <div key={product._id} className='group relative'>
        <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
            <Image src={product.imageUrl} alt='Product Image' width={300} height={300} className='size-full object-cover object-center' />
        </div>

        <div className='mt-4'>
            <div className='flex justify-between items-center text-xl w-full'>
                <h3 className='font-semibold w-3/4'>
                    <Link href={`/product/${product.slug}`} className='text-gray-700'>{product.name}</Link>
                </h3>
                <p>${product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard