"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface gallery {
    images: any
}

const ProductGallery = ({images}: gallery) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageChange = (image: any) => {
    setCurrentImage(image);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image src={urlFor(image).url()} alt="Photo" width={200} height={200} className="size-full object-cover object-center cursor-pointer" onClick={() => handleImageChange(image)} />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image src={urlFor(currentImage).url()} alt="Big Photo" width={500} height={500} className="size-full object-cover object-center cursor-pointer"/>
      </div>
    </div>
  )
}

export default ProductGallery