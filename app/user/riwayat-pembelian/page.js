"use client"
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import DashboardMenu from '@/components/dashboard/DashboardMenu'
import Image from 'next/image'
import React from 'react'

export default function UserDashboard() {
    return (
        <>
            <DashboardLayout>
                <div className="flex gap-3">
                    <div className="w-3/12  p-2">
                        <DashboardMenu />
                    </div>
                    <div className="w-9/12 ">
                        <div className="bg-white p-5">
                            <div className="flex items-center my-4 w-full">
                                <div className="w-1/12 text-center">
                                    <h1>1</h1>
                                </div>
                                <div className="w-5/12">
                                    <div className="flex gap-4 items-center">
                                        <div className="foto-produk">
                                            <Image width={100} height={100} src="https://down-id.img.susercontent.com/file/01f543f8875cdf2a179a3c6b0e6354c8" alt="" className='w-[100px] h-[100px] rounded-lg' />
                                        </div>
                                        <div className="keterangan-produk">
                                            <h1 className='font-semibold'>Baju Sweter Hangat</h1>
                                            <div className='text-gray-500 text-sm'>
                                                {/* @{toRupiah(data?.harga_produk, {
                                            floatingPoint: 0,
                                            formal: false
                                        })} */}
                                                <p>Jumlah : 2</p>
                                                {/* <p className='text-xs font-semibold mt-5'>17/07/2024</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="3/12 text-center">
                                    <p className='bg-green-200 rounded-full text-xs p-2'>Diterima</p>
                                    <p className='bg-green-200 rounded-full text-xs p-2 mt-2'>17/08/2024</p>
                                </div>
                                <div className="w-4/12 text-end">
                                    <h1 className='text-xl'>
                                        {/* {toRupiah((data?.harga_produk * data?.jumlah), {
                                    floatingPoint: 0,
                                    formal: false
                                })} */}
                                        Rp 500.000
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
