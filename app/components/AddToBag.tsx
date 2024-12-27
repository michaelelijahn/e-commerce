"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'

export interface ProductCart {
    name: string,
    description: string,
    price: number,
    image:any,
    currency: string,
    price_id: string,
    size: string,
    setSize: any,
}

const AddToBag = ({ currency, description, image, name, price, price_id, size, setSize } : ProductCart) => {
    const { addItem, handleCartClick } = useShoppingCart();

    const handleAddToBagClick = () => {
        if (!size || size === "") {
            alert("Please select a size");
            return;
        }

        const product = { 
            name: name, 
            description: description,
            price: price, 
            currency: currency,
            image: urlFor(image).url(),
            size: size,
            price_id: `${price_id}_${size}`
        }

        addItem(product);
        setSize("");
        handleCartClick()
    }

    return (
        <Button onClick={() => handleAddToBagClick()} className='bg-blue-600 hover:bg-blue-700'>Add to Bag</Button>
    )
}

export default AddToBag