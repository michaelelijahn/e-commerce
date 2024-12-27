"use client"
import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"

const links = [
    {name: "Home", href: "/"},
    {name: "Men", href: "/Men"},
    {name: "Women", href: "/Women"},
    {name: "Kids", href: "/Kids"},
]

const Navbar = () => {
    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();
    const [open, setOpen] = useState(false);

    return (
        <header className='my-4 border-b-8 '>
            {/* Desktop Navigation */}
            <nav className='justify-between items-center mx-8 my-4 hidden md:flex'>
                <Link href="/">
                    <h1 className='text-4xl font-bold text-yellow-600'>Court & Castle</h1>
                </Link>

                <div className='flex items-center gap-4'>
                    {links.map((link, idx) => (
                        <div className='flex items-center gap-4 text-xl font-bold' key={idx}>
                            {
                                pathname === link.href ? (
                                    <Link className='underline underline-offset-8' href={link.href}>{link.name}</Link>
                                ) : (
                                    <Link className=' text-gray-600 hover:text-black' href={link.href}>{link.name}</Link>
                                )
                            }
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    <button><User /></button>
                    <button onClick={() => handleCartClick()}><ShoppingBag /></button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className='md:hidden flex justify-between items-center mx-4 my-4'>
                <Link href="/">
                    <h1 className='text-3xl font-bold'>OnlineShop</h1>
                </Link>

                <div className='flex items-center gap-4 text-sm'>
                    <button><User /></button>
                    <button onClick={() => handleCartClick()}><ShoppingBag /></button>
                    <div>
                        <button onClick={() => setOpen((open) => !open)}><Menu /></button>
                        {open && <Sheet open={open} onOpenChange={() => setOpen((open) => !open)}>
                            <SheetContent className="sm:max-w-lg w-[85%]">
                                <SheetHeader>
                                    <SheetTitle className="text-2xl">Categories</SheetTitle>
                                    {links.map((link, idx) => (
                                        <div className='flex items-center gap-4 text-xl font-bold' key={idx}>
                                            {
                                                pathname === link.href ? (
                                                    <Link className='underline underline-offset-8' href={link.href}>{link.name}</Link>
                                                ) : (
                                                    <Link className=' text-gray-600 hover:text-black' href={link.href}>{link.name}</Link>
                                                )
                                            }
                                        </div>
                                    ))}
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar