"use client"
import Navbar from '@/components/navbar'
import { faCalendar, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Checkout() {
    const [quantity, setQuantity] = useState(1)
    return (
        <>

            <Navbar />
            <div className=" mx-auto md:mx-10 mt-3 mb-10 px-5 md:px-0">
                <div className="md:flex md:gap-5">
                    <div className="md:w-9/12 h-auto pb-10 bg-white rounded-xl p-5">
                        <div className="md:flex gap-5 flex-wrap md:flex-nowrap">
                            <div className="md:w-1/6">
                                <img src="/assets/produk5.jpg" alt="" className='w-full rounded-lg h-[180px] md:h-[130px] mb-3 md:mb-0' />
                            </div>
                            <div className="md:w-5/6">
                                <h1 className='text-xl font-semibold'>Lampu tidur Botol Plastik AQUA  </h1>
                                <span className='text-gray-500 mt-2 text-base'>2 Items</span>
                                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                                    <span className='text-gray-500 mt-2 text-base'>Spesification</span>
                                    <span className='text-gray-500 mt-2 text-base'>|</span>
                                    <span className='text-gray-500 mt-2 text-base'>Spesification</span>
                                    <span className='text-gray-500 mt-2 text-base'>|</span>
                                    <span className='text-gray-500 mt-2 text-base'>Spesification</span>
                                </div>
                                <h1 className='text-gray-500 text-md'>Note : Diusahakan rabu harus datang ya!. </h1>
                                <h1 className='font-semibold text-2xl mt-2'>Rp. 500.000</h1>

                            </div>
                        </div>
                        <hr className='mt-8' />
                        <div className="w-full">
                            <h1 className='font-semibold mt-4 text-xl text-gray-600'>Delivery Information</h1>

                            <div className="flex mt-3 gap-4">
                                <div className="md:w-1/6">
                                    <img src="/assets/map.png" alt="" className='rounded-lg h-[130px]' />
                                </div>
                                <div className="md:w-2/6">
                                    <h1 className='text-md font-semibold'>AlulCode</h1>
                                    <h2 className='text-sm text-gray-400'>088801790233</h2>
                                    <p className='text-sm'>
                                        Sraturejo, Baureno, Kab Bojonegoro, Jawa Timur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 gap-2 text-sm">
                                <FontAwesomeIcon icon={faCalendar} className='text-gray-400 mr-1' />
                                <span className='text-gray-400'>Estimated Delivery in 3 Days</span>
                                <span className='text-gray-400'>|</span>
                                <FontAwesomeIcon icon={faShield} className=' text-gray-400 mr-1' />
                                <span className='text-gray-400'>Free shipping insurance</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/12 bg-white md:h-auto p-3">
                        <h1 className='mb-2 text-md'>Kode Voucher</h1>

                        <div className="flex w-full mt-2">
                            <input type="text" placeholder='Masukan Kode' className='py-2 border px-2 w-2/3 focus:outline-gray-400 text-sm' />
                            <button className='bg-blue-50 text-primary w-1/3 font-semibold'>Gunakan</button>
                        </div>

                        <h1 className='mb-2 mt-4 text-md'>Metode Pembayaran</h1>
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <button className='py-2 text-md px-3 border hover:bg-blue-50 hover:text-primary hover:font-bold'>Transfer</button>
                            <button className='py-2 text-md px-3 border hover:bg-blue-50 hover:text-primary hover:font-bold'>Gopay</button>
                            <button className='py-2 text-md px-3 border bg-blue-50 text-primary font-bold'>Dana</button>
                        </div>
                        <h1 className='mb-2 mt-4 text-md'>Detail Pemesanan</h1>
                        <div className="flex justify-between items-center">
                            <h1 className='text-gray-400 text-sm'>Sub Total</h1>
                            <h1 className='text-lg font-semibold text-gray-500'>Rp. 1.000.000</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='text-gray-400 text-sm'>Biaya Kirim</h1>
                            <h1 className='text-lg font-semibold text-gray-500'>Rp. 50.000</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='text-gray-400 text-sm'>Pajak (2.5%)</h1>
                            <h1 className='text-lg font-semibold text-gray-500'>Rp. 10.000</h1>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <h1 className='text-gray-400 text-sm'>Total</h1>
                            <h1 className='text-xl font-bold'>Rp. 1.060.000</h1>
                        </div>


                        <button className='text-white bg-primary w-full py-3 rounded-md mt-8 font-semibold'>Bayar Sekarang</button>
                    </div>
                </div>
            </div>
        </>
    )
}
