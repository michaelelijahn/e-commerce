"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'
import { ProductCart } from './AddToBag'

const Checkout = ({ currency, description, image, name, price, price_id, size, setSize } : ProductCart) => {
    const { checkoutSingleItem } = useShoppingCart();

    const buyNow = (price_id: string) => {
        checkoutSingleItem(price_id)
    }

    const handleCheckoutClick = () => {
        const product = { 
            name: name, 
            description: description,
            price: price, 
            currency: currency,
            image: urlFor(image).url(),
            size: size,
            price_id: price_id
        }

        buyNow(product.price_id); 
    }

    return (
        <Button onClick={() => handleCheckoutClick()} variant={"secondary"}>Checkout</Button>
    )
}

export default Checkout