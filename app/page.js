/* eslint-disable @next/next/no-img-element */
"use client"
import Navbar from '@/components/navbar';
import {BsBoxSeamFill, BsFillStarFill} from 'react-icons/bs';
import {FaLocationDot} from 'react-icons/fa6';
import React, {useEffect, useState} from 'react'
import FilterComponents from '@/components/filter';
import axios from 'axios';
import {useSession} from 'next-auth/react';
import toRupiah from '@develoka/angka-rupiah-js';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
    const {data: session, status} = useSession()

    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`, {
                headers: {
                    "Authorization": `Bearer ${session?.remember_token}`
                }
            }).then((out) => {
                setProduct(out?.data?.data)
            }).catch((err) => {
                console.log(err);
            })
        }
        getProduct()
    }, [session])


    return (
        <>
            <Navbar/>
            <main className='container mx-auto md:mx-10 mt-3'>
                <div className="flex">
                    <div className="hidden md:block w-[214px] ">
                        <FilterComponents/>
                    </div>
                    <div className="w-full md:w-[calc(100%-240px)] px-7 pb-10">
                        <div className="flex mb-5 gap-8 w-full justify-between md:justify-start">
                            <button
                                className='flex pb-3 px-4 font-bold text-primary border-b-2 border-b-primary gap-2 items-center w-1/2 md:w-auto justify-center'>
                                <BsBoxSeamFill/> Product
                            </button>
                            <button
                                className='flex px-4 text-gray-500 pb-3 font-semibold gap-2 items-center w-1/2 md:w-auto justify-center'>
                                <BsBoxSeamFill/> Toko
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                            {
                                product ? product?.map((data, i) => (
                                    <div className="bg-white shadow-sm pb-2" key={i}>
                                        <Image
                                            src={data.foto_produk[0] ? data?.foto_produk?.[0] : `${process.env.NEXT_PUBLIC_URL}/assets/no-image.png`}
                                            alt="" className='w-full h-[180px]' width={180} height={180}/>
                                        <div className="px-2 text-[13.5px] mt-2">
                                            <Link href={`/product/${data?.id}`}>
                                                <p>{data?.nama_produk?.substr(0, 38)} ...</p></Link>
                                            <p className='my-2 font-bold'>{toRupiah(data?.harga_produk, {
                                                floatingPoint: 0,
                                                formal: false
                                            })}</p>
                                            <p className='flex items-center text-gray-500 gap-2'>
                                                <FaLocationDot/> Jakarta
                                            </p>
                                            <div className="flex mt-2 gap-2">
                                                <span
                                                    className='flex items-center gap-1 text-[12px] text-gray-500'><BsFillStarFill
                                                    className='text-yellow-400'/>4.5</span>
                                                <span className='text-gray-500'>|</span>
                                                <span className='text-gray-500 text-[12px]'>Terjual 2rb+</span>
                                            </div>
                                        </div>
                                    </div>
                                )) : <h1>Loading</h1>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
