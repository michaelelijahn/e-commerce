"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const ShoppingCartModal = () => {

  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart();

  const handleCheckout = async (e: any) => {
    e.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[85%]">
        <SheetHeader>
          <SheetTitle className="text-2xl">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col jsutify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? 
                (
                  <h1 className="py-6">Empty Shopping Cart</h1>
                ): (
                  <>
                  {Object.values(cartDetails ?? {}).map((cart) => (
                    <li key={cart.id} className="flex py-6">
                      <div className="h-26 w-26 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image src={cart.image as string} alt="Product Image" width={100} height={100} />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className="font-bold">{cart.name}</h3>
                            <h3 className="font-semibold">${cart.price}</h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{cart.description}</p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <h3 className="font-semibold">Size: {cart.size}</h3>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="font-semibold">Quantity: {cart.quantity}</p>

                          <div className="flex">
                            <button type="button" className="font-medium text-blue-600 hover:text-blue-800" onClick={() => removeItem(cart.id)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  </>
                )
              }
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base text-gray-900 font-bold">
              <p>Subtotal: </p>
              <p>${totalPrice}</p>
            </div>

            <div className="mt-6 ">
              <Button onClick={handleCheckout} className="w-full bg-blue-600 hover:bg-blue-700">Checkout</Button>
            </div>

            <div className="mt-2 flex flex-col justify-center text-center text-sm text-gray-500">
              <p>or</p>
              <button onClick={() => handleCartClick()} className="mt-2 font-semibold hover:text-blue-600">Continue Shopping</button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartModal