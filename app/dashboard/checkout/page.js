"use client"
import Navbar from '@/components/navbar'
import { faBox, faCalendar, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Bell, Box, Camera, DollarSign, Mail, MapPin, ShoppingCart, Star, Truck } from 'react-feather'

export default function Checkout() {
    const [quantity, setQuantity] = useState(1)
    return (
        <>

            <Navbar />
            <div className="container mx-auto mt-3 mb-10 px-5 md:px-0">
                <div className="md:flex md:gap-5">
                    <div className="md:w-9/12 h-auto pb-10 bg-white rounded-xl p-5">
                        <div className="flex gap-5 flex-wrap md:flex-nowrap">
                            <div className="md:w-1/6">
                                <img src="/assets/produk1.jpg" alt="" className='rounded-lg' />
                            </div>
                            <div className="md:w-5/6">
                                <h1 className='text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicin. </h1>
                                <span className='text-gray-500 mt-2 text-md'>2 Items</span>
                                <div className="flex gap-3 mt-2">
                                    <span className='text-gray-500 mt-2 text-md'>Spesification</span>
                                    <span className='text-gray-500 mt-2 text-md'>|</span>
                                    <span className='text-gray-500 mt-2 text-md'>Spesification</span>
                                    <span className='text-gray-500 mt-2 text-md'>|</span>
                                    <span className='text-gray-500 mt-2 text-md'>Spesification</span>
                                </div>
                                <h1 className='text-gray-500 mt-3 text-md'>Note : Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                                <h1 className='font-semibold text-2xl mt-2'>Rp. 500.000</h1>

                            </div>
                        </div>
                        <hr className='mt-8' />
                        <div className="w-full">
                            <h1 className='font-semibold mt-4 text-2xl text-gray-600'>Delivery Information</h1>

                            <div className="flex mt-3 gap-4">
                                <div className="w-1/6">
                                    <img src="/assets/produk1.jpg" alt="" className={'rounded-lg'} />
                                </div>
                                <div className="md:w-2/6">
                                    <h1 className='text-xl font-semibold'>AlulCode</h1>
                                    <h2 className='text-md text-gray-400'>088801790233</h2>

                                    <p>
                                        Sraturejo, Baureno, Kab Bojonegoro, Jawa Timur
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 gap-2">
                                <FontAwesomeIcon icon={faCalendar} className=' text-gray-400 mr-1' />
                                <span className='text-gray-400'>Estimated Delivery in 3 Days</span>
                                <span className='text-gray-400'>|</span>
                                <FontAwesomeIcon icon={faShield} className=' text-gray-400 mr-1' />
                                <span className='text-gray-400'>Free shipping insurance</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/12 bg-white md:h-auto p-3">
                        <h1 className='mb-2 text-lg'>Kode Voucher</h1>

                        <div className="flex w-full mt-2">
                            <input type="text" placeholder='Masukan Kode' className='py-3 px-2 w-2/3 focus:outline-gray-400' />
                            <button className='bg-blue-50 text-primary w-1/3 font-bold'>Gunakan</button>
                        </div>

                        <h1 className='mb-2 mt-4 text-lg'>Metode Pembayaran</h1>
                        <div className="grid grid-cols-3 gap-2 w-full">
                            <button className='py-2 px-3 border hover:bg-blue-50 hover:text-primary hover:font-bold'>Transfer</button>
                            <button className='py-2 px-3 border hover:bg-blue-50 hover:text-primary hover:font-bold'>Gopay</button>
                            <button className='py-2 px-3 border bg-blue-50 text-primary font-bold'>Dana</button>
                        </div>
                        <h1 className='mb-2 mt-4 text-lg'>Detail Pemesanan</h1>
                        <div className="flex justify-between items-center">
                            <h1 className='text-gray-400 text-md'>Sub Total</h1>
                            <h1 className='text-lg font-bold'>Rp. 1.000.000</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='text-gray-400 text-md'>Biaya Kirim</h1>
                            <h1 className='text-lg font-bold'>Rp. 50.000</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='text-gray-400 text-md'>Pajak (2.5%)</h1>
                            <h1 className='text-lg font-bold'>Rp. 10.000</h1>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <h1 className='text-gray-400 text-md'>Total</h1>
                            <h1 className='text-2xl font-bold'>Rp. 1.060.000</h1>
                        </div>


                        <button className='text-white bg-primary w-full py-3 rounded-xl mt-8 font-semibold'>Bayar Sekarang</button>
                    </div>
                </div>
            </div>
        </>
    )
}
