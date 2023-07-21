"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { Bell, Mail, MapPin, ShoppingCart } from 'react-feather'
import { BiLogIn, BiLogOut, BiUser } from 'react-icons/bi'

export default function Navbar() {
    const { data: session } = useSession()
    const [showDropdownProfile, setShowDropdownProfile] = useState(false);

    const handleProfileClick = () => {
        setShowDropdownProfile(!showDropdownProfile);
    };

    return (
        <header>
            <div className="w-screen mb-1 py-4 bg-white">
                <div className=" mx-auto md:mx-10 flex justify-between items-center px-5 md:px-0">
                    <div id="icon">
                        <h1 className='text-2xl font-extrabold text-primary'><Link href="/">JuraganMuda</Link></h1>
                    </div>
                    <div id="search" className='hidden md:block'>
                        <form className='flex gap-2'>
                            <input type="text"
                                className='px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-gray-300 w-[700px]'
                                placeholder='Cari Produk' />
                            <button className='bg-primary font-bold rounded-md py-1 px-6 text-white'>Cari</button>
                        </form>
                    </div>
                    <div id="menu" className='flex gap-3 items-center'>
                        <ShoppingCart className='text-gray-500' />
                        <Mail className='text-gray-500' />
                        <Bell className='text-gray-500' />
                        <div className="relative">
                            <div onClick={handleProfileClick}>
                                <Image
                                    src={session?.user?.foto_profile ? session?.user?.foto_profile : `${process.env.NEXT_PUBLIC_URL}/assets/default-user.png`}
                                    width={50}
                                    height={50}
                                    alt=""
                                    className='rounded-full w-8 h-8 ml-3 cursor-pointer'
                                />
                            </div>
                            {showDropdownProfile && (
                                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md w-40">

                                    {
                                        (session?.user ? (
                                            <>
                                                <p className="block px-4 py-2 text-gray-800 text-md hover:bg-gray-100 cursor-pointer">
                                                    <div className="flex gap-1 items-center">
                                                        <BiUser />Profile
                                                    </div>
                                                </p>

                                                <p className="block px-4 py-2 text-gray-800 text-md hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        signOut()
                                                    }}>
                                                    <div className="flex gap-1 items-center">
                                                        <BiLogOut />Keluar
                                                    </div>
                                                </p>
                                            </>
                                        ) : (
                                            <p className="block px-4 py-2 text-gray-800 text-md hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    signIn()
                                                }}>
                                                <div className="flex gap-1 items-center">
                                                    <BiLogIn />Masuk
                                                </div>
                                            </p>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen bg-white'>
                <div className='flex justify-between mx-auto md:mx-10 py-3 px-5 md:px-0 text-gray-600'>
                    <div id="rekomendasi" className='md:flex gap-5 hidden'>
                        <h1>Jasa Design</h1>
                        <h1>Botol Bekas</h1>
                    </div>
                    <div id="location" className='flex gap-2 md:text-base text-sm items-center'>
                        <MapPin className='text-gray-500 text-sm' />
                        <h1>Ship to : </h1>
                        <b>Sraturejo, Baureno, Jawa Timur</b>
                    </div>
                </div>
            </div>
        </header>
    )
}
