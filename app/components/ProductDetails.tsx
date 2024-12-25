
"use client"
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import React, { useState } from 'react'
import Sizes from './Sizes';
import AddToBag from './AddToBag';
import Checkout from './Checkout';
import { detailedProduct } from '../interface';

const ProductDetails = ({ data }: {data: detailedProduct}) => {
    const [size, setSize] = useState("  ");

    return (
        <div className=''>
            <div className='mb-2 md:mb-3 flex flex-col'>
                <span className='mb-0.5 text-xl font-semibold inline-block text-gray-600'>{data.category}</span>
                <h2 className='text-2xl lg:text-3xl font-bold inline-block'>{data.name}</h2>
            </div>

            <div className='mb-6 flex items-center gap-3'>
                <Button className='rounded-full gap-x-2 font-bold bg-blue-600'>
                    <span className='text-md'>4.5</span>
                    <Star className='size-5' />
                </Button>

                <span className='text-sm text-gray-500 transition duration-100'>
                    87 Ratings
                </span>
            </div>

            <div className='flex flex-col mb-6'>
                <span className='text-xl font-bold text-gray-800 md:text-2xl'>${data.price}</span>
                <span className='text-sm text-gray-500'>Incl. Vat plus shipping</span>
            </div>

            <div className='mb-6 flex items-center gap-2 text-gray-500'>
                <Truck className='w-6 h-6' />
                <span className='text-sm'>3-5 Business Days</span>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <h1 className='text-xl font-semibold'>Select Size</h1>
                <Sizes sizes={data.sizes} size={size} setSize={setSize} />
            </div>

            <div className='flex gap-2.5'>
                <AddToBag currency='USD' description={data.description} image={data.images[0]} name={data.name} price={data.price} price_id={data.price_id} size={size} setSize={setSize} />
                <Checkout currency='USD' description={data.description} image={data.images[0]} name={data.name} price={data.price} price_id={data.price_id} size={size} setSize={setSize}/>
            </div>

            <p className='mt-12 text-base text-gray-500 tracking-wide'>{data.description}</p>
        </div>
    )
}

export default ProductDetails