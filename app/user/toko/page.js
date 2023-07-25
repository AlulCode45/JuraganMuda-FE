"use client"
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import DashboardMenu from '@/components/dashboard/DashboardMenu'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

export default function UserDashboard() {
    const [user, setUser] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        const getUser = async () => {
            return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                headers: {
                    "Authorization": `Bearer ${session?.user?.remember_token}`
                }
            }).then((out) => {
                setUser(out?.data?.data)
            }).catch((err) => {
                console.log(err);
            })
        }
        getUser()
    }, [session])
    return (
        <>
            <DashboardLayout>
                <div className="flex gap-3">
                    <div className="w-3/12 p-2">
                        <DashboardMenu />
                    </div>
                    <div className="w-9/12  ">
                        <div className="bg-white p-5">
                            <div className="flex gap-7 items-center">
                                <div className="foto-profile w-1/4">
                                    <Image src={user?.foto_profile ? user?.foto_profile : `${process.env.NEXT_PUBLIC_URL}/assets/default-user.png`}
                                        alt="Profile Picture"
                                        className="rounded-full w-52 h-52 border-2 border-gray-500" width={50} height={50} />
                                </div>
                                <div className="detail-profile w-3/4">
                                    <h1 className="text-2xl font-bold mt-4">Toko Jaya Maju Utama</h1>
                                    <div className="mt-3">
                                        <div className="grid grid-cols-3 gap-3 text-center">
                                            <div className='bg-green-200 py-2 px-1 font-semibold  rounded-md'>
                                                Jumlah Produk : 200
                                            </div>
                                            <div className='bg-blue-200 py-2 px-1 font-semibold  rounded-md'>
                                                Produk Terjual : 10rb
                                            </div>
                                            <div className='bg-orange-200 py-2 px-1 font-semibold  rounded-md'>
                                                Rating : 4.5
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 text-center mt-3">
                                            <div className='bg-purple-200 py-2 px-1 font-semibold  rounded-md'>
                                                Pemasukan : Rp 5.000.000
                                            </div>
                                            <div className=' bg-pink-200 py-2 px-1 font-semibold  rounded-md'>
                                                Uang Ditarik : Rp 3.000.000
                                            </div>
                                            <div className=' bg-yellow-200 py-2 px-1 font-semibold  rounded-md'>
                                                Uang Sisa : Rp 2.000.000
                                            </div>
                                        </div>
                                        <hr className='my-2' />
                                        <div className='font-semibold'>Alamat: </div>
                                        <div className="flex">
                                            <div className="w-1/2">
                                                <div>Dusun : {user?.dusun || '-'}</div>
                                                <div>RT: {user?.rt || '-'}</div>
                                                <div>RW: {user?.rw || '-'}</div>
                                                <div>Desa: {user?.desa || '-'}</div>
                                                <div>Kecamatan: {user?.kecamatan || '-'}</div>
                                            </div>
                                            <div className="w-1/2">
                                                <div>Kode Pos: {user?.kode_pos || '-'}</div>
                                                <div>Kabupaten/Kota: {user?.kabupaten_kota || '-'}</div>
                                                <div>Provinsi: {user?.provinsi || '-'}</div>
                                                <div>Negara: {user?.negara || '-'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className='my-4' />
                            <div className="grid grid-cols-3 gap-3">
                                <button className='bg-white border-2 border-primary py-2 rounded-md text-black hover:bg-primary hover:text-white'>Tambah Produk</button>

                                <div class="relative">
                                    <div class="h-3 w-3 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
                                    <button class='bg-white border-2 border-primary py-2 rounded-md text-black hover:bg-primary hover:text-white w-full'>Kelola Pesanan</button>
                                </div>

                                <div class="relative">
                                    <div class="h-3 w-3 rounded-full bg-red-500 absolute -top-1 -right-1"></div>
                                    <button class='bg-white border-2 border-primary py-2 rounded-md text-black hover:bg-primary hover:text-white w-full'>Pesanan Selesai</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10">
                                <div className="bg-white shadow-sm pb-2">
                                    <Image
                                        src={`https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/2/14/c156e901-c562-43ea-ab86-fb2a3191a927.jpg`}
                                        alt="" className='w-full h-[180px]' width={180} height={180} />
                                    <div className="px-2 text-[13.5px] mt-2">
                                        <Link href={`/product/1`}>
                                            <p>Source Code Aplikasi Belajar</p>
                                        </Link>
                                        <p className='my-2 font-bold'>
                                            Rp 250.000
                                        </p>
                                        <p className='flex items-center text-gray-500 gap-2'>
                                            <FaLocationDot /> Jakarta
                                        </p>
                                        <div className="flex mt-2 gap-2">
                                            <span className='flex items-center gap-1 text-[12px] text-gray-500'>
                                                <BsFillStarFill className='text-yellow-400' />4.5</span>
                                            <span className='text-gray-500'>|</span>
                                            <span className='text-gray-500 text-[12px]'>Terjual 10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-sm pb-2">
                                    <Image
                                        src={`https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2023/3/11/712a6d02-549b-4c63-bd02-2fe8693980eb.jpg`}
                                        alt="" className='w-full h-[180px]' width={180} height={180} />
                                    <div className="px-2 text-[13.5px] mt-2">
                                        <Link href={`/product/1`}>
                                            <p>Source Code Aplikasi Belajar</p>
                                        </Link>
                                        <p className='my-2 font-bold'>
                                            Rp 250.000
                                        </p>
                                        <p className='flex items-center text-gray-500 gap-2'>
                                            <FaLocationDot /> Jakarta
                                        </p>
                                        <div className="flex mt-2 gap-2">
                                            <span className='flex items-center gap-1 text-[12px] text-gray-500'>
                                                <BsFillStarFill className='text-yellow-400' />4.5</span>
                                            <span className='text-gray-500'>|</span>
                                            <span className='text-gray-500 text-[12px]'>Terjual 10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-sm pb-2">
                                    <Image
                                        src={`https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/5/69079008-b2a9-45fd-bbf6-21b45965743e.jpg`}
                                        alt="" className='w-full h-[180px]' width={180} height={180} />
                                    <div className="px-2 text-[13.5px] mt-2">
                                        <Link href={`/product/1`}>
                                            <p>Source Code Aplikasi Belajar</p>
                                        </Link>
                                        <p className='my-2 font-bold'>
                                            Rp 250.000
                                        </p>
                                        <p className='flex items-center text-gray-500 gap-2'>
                                            <FaLocationDot /> Jakarta
                                        </p>
                                        <div className="flex mt-2 gap-2">
                                            <span className='flex items-center gap-1 text-[12px] text-gray-500'>
                                                <BsFillStarFill className='text-yellow-400' />4.5</span>
                                            <span className='text-gray-500'>|</span>
                                            <span className='text-gray-500 text-[12px]'>Terjual 10</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-sm pb-2">
                                    <Image
                                        src={`https://images.tokopedia.net/img/cache/200-square/product-1/2019/7/29/1597097/1597097_d64afe24-2207-4b30-beb7-0d3b40d6e989_800_800.webp?ect=4g`}
                                        alt="" className='w-full h-[180px]' width={180} height={180} />
                                    <div className="px-2 text-[13.5px] mt-2">
                                        <Link href={`/product/1`}>
                                            <p>Source Code Aplikasi Belajar</p>
                                        </Link>
                                        <p className='my-2 font-bold'>
                                            Rp 250.000
                                        </p>
                                        <p className='flex items-center text-gray-500 gap-2'>
                                            <FaLocationDot /> Jakarta
                                        </p>
                                        <div className="flex mt-2 gap-2">
                                            <span className='flex items-center gap-1 text-[12px] text-gray-500'>
                                                <BsFillStarFill className='text-yellow-400' />4.5</span>
                                            <span className='text-gray-500'>|</span>
                                            <span className='text-gray-500 text-[12px]'>Terjual 10</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white shadow-sm pb-2">
                                    <Image
                                        src={`https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/10/12/d55047ad-a144-4212-a4d8-83f03a9db0d6.jpg.webp?ect=4g`}
                                        alt="" className='w-full h-[180px]' width={180} height={180} />
                                    <div className="px-2 text-[13.5px] mt-2">
                                        <Link href={`/product/1`}>
                                            <p>Source Code Aplikasi Belajar</p>
                                        </Link>
                                        <p className='my-2 font-bold'>
                                            Rp 250.000
                                        </p>
                                        <p className='flex items-center text-gray-500 gap-2'>
                                            <FaLocationDot /> Jakarta
                                        </p>
                                        <div className="flex mt-2 gap-2">
                                            <span className='flex items-center gap-1 text-[12px] text-gray-500'>
                                                <BsFillStarFill className='text-yellow-400' />4.5</span>
                                            <span className='text-gray-500'>|</span>
                                            <span className='text-gray-500 text-[12px]'>Terjual 10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayout>
        </>
    )
}
