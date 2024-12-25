import React from 'react'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity'
import LatestProducts from './LatestProducts'
import Categories from './Categories'

const getCharacterImage = async () => {
  const q = "*[_type == 'characterImage'][0]"
  const data = await client.fetch(q);
  return data;
}

const Hero = async () => {
  const characterImage = await getCharacterImage();
  
  return (
    <section className='max-w-2xl mx-auto px-4 pb-6 lg:max-w-6xl lg:px-8'>
      <div className='flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between mb-14 lg:mb-36'>
        <div className=' lg:w-1/2 lg:mt-10 flex flex-col gap-4 items-center mb-4'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl lg:pt-36 font-bold text-gray-900'>Where Style Meets Comfort in Every Stitch</h1>
          <span className=' hidden lg:block text-md font-semibold text-slate-600'>From carefully sourced fabrics to thoughtfully designed silhouettes, our collection brings together modern elegance and lasting comfort.</span>
        </div>

        <div className='w-full flex justify-center lg:w-2/3 lg:mt-10 mb-24 sm:mb-28 md:mb-36 lg:mb-20'>
          <div className='relative left-12 top-12 z-10 -ml-12 rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image src={urlFor(characterImage.image1).url()} alt={'Male Photo'} width={500} height={500} priority className='h-[125%] w-full md:min-w-80 lg:size-[120%] rounded-lg object-cover object-center' />
          </div>

          <div className='rounded-lg bg-gray-100 shadow-lg'>
            <Image src={urlFor(characterImage.image2).url()} alt={'Women Photo'} width={500} height={500} priority className='h-[125%] w-full md:min-w-80 lg:size-[120%] rounded-lg object-cover object-center' />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-between gap-8'>
        <div className='flex flex-col gap-7'>
          <div className='flex justify-between items-center my-auto'>
            <h1 className='text-2xl md:text-4xl font-bold tracking-tight text-gray-900'>New Releases</h1>
            {/* <Link href="/all" className='text-lg flex items-center gap-x-1 text-gray-700 hover:text-black'>See All <span><ArrowRight /></span></Link> */}
          </div>
          <LatestProducts />
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center my-auto'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2 tracking-tight text-gray-900'>Trending</h1>
          </div>
          <Categories />
        </div>
      </div>
    </section>
  )
}

export default Hero