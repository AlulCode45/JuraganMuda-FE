"use client"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Bell, Camera, Mail, MapPin, ShoppingCart, Star } from 'react-feather'

export default function Dashboard() {
    const [categoryIsOpen, setCategoryIsOpen] = useState(true);
    const [conditionsIsOpen, setConditionsIsOpen] = useState(true);

    const categoryTogle = () => {
        setCategoryIsOpen(!categoryIsOpen);
    };
    const conditionsTogle = () => {
        setConditionsIsOpen(!conditionsIsOpen)
    }
    return (
        <>
            <header>
                <div className="w-screen mb-1 py-4 bg-white">
                    <div className="container mx-auto flex justify-between items-center">
                        <div id="icon">
                            <h1 className='text-2xl font-extrabold text-primary'>JuraganMuda</h1>
                        </div>
                        <div id="search">
                            <form className='flex gap-2'>
                                <input type="text" className='px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-gray-300 w-[700px]' placeholder='Cari Produk' />
                                <button className='bg-primary font-bold rounded-md py-1 px-6 text-white'>Cari</button>
                            </form>
                        </div>
                        <div id="menu" className='flex gap-3 items-center'>
                            <ShoppingCart className='text-gray-500' />
                            <Mail className='text-gray-500' />
                            <Bell className='text-gray-500' />
                            <img src="https://picsum.photos/200" alt="" className='rounded-full w-8 h-8 ml-3' />
                        </div>
                    </div>
                </div>
                <div className='w-screen bg-white'>
                    <div className='flex justify-between container mx-auto py-3 text-gray-600'>
                        <div id="rekomendasi" className='flex gap-5'>
                            <h1>Jasa Design</h1>
                            <h1>Botol Bekas</h1>
                        </div>
                        <div id="location" className='flex gap-2'>
                            <MapPin className='text-gray-500' />
                            <h1>Ship to : </h1>
                            <b>Sraturejo, Baureno, Jawa Timur</b>
                        </div>
                    </div>
                </div>
            </header>

            <main className='container mx-auto mt-3'>
                <div className="flex">
                    <div className="w-1/4 bg-white scrollY h-[calc(100vh-122px)] pb-10 p-4">
                        <h1 className='text-xl font-bold'>Filters</h1>

                        <div className="flex items-center" onClick={categoryTogle}>
                            <div className="flex items-center">
                                <span className="mr-2 mt-3 text-lg">Kategori</span>
                                <svg className={`h-4 w-4 transition-transform ${categoryIsOpen ? 'transform rotate-180' : ''
                                    }`} width="20px" height="20px" viewBox="0 0 1.2 1.2" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1.2v1.2H0z" fill="none" /><g id="Shopicon"><path points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586 	" d="M0.6 0.729L0.235 0.365L0.165 0.435L0.6 0.871L1.035 0.435L0.965 0.365Z" /></g></svg>
                            </div>
                        </div>
                        {categoryIsOpen && (
                            <div className="ml-4 mt-2">
                                <div className="flex flex-col">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <span className="ml-2">Option 1</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <span className="ml-2">Option 2</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <span className="ml-2">Option 3</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center" onClick={conditionsTogle}>
                            <div className="flex items-center">
                                <span className="mr-2 mt-3 text-lg">Kondisi</span>
                                <svg className={`h-4 w-4 transition-transform ${conditionsIsOpen ? 'transform rotate-180' : ''
                                    }`} width="20px" height="20px" viewBox="0 0 1.2 1.2" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1.2v1.2H0z" fill="none" /><g id="Shopicon"><path points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586 	" d="M0.6 0.729L0.235 0.365L0.165 0.435L0.6 0.871L1.035 0.435L0.965 0.365Z" /></g></svg>
                            </div>
                        </div>
                        {conditionsIsOpen && (
                            <div className="ml-4 mt-2">
                                <div className="flex flex-col">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <span className="ml-2">Baru</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        />
                                        <span className="ml-2">Bekas</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Range Harga */}
                        <span className='mr-2 text-lg mt-3'>Harga</span>
                        <input type="text" className='w-full border border-gray-300 py-1 mt-2 px-3 rounded-md focus:outline-gray-400' placeholder='Minimum Harga' />
                        <input type="text" className='w-full border border-gray-300 py-1 mt-3 px-3 rounded-md focus:outline-gray-400' placeholder='Maximum Harga' />

                        <div className="flex flex-wrap mt-3">
                            <button className="hover:bg-blue-50 hover:border-primary hover:font-semibold hover:text-primary border px-3 py-2 rounded-md my-1 mx-1">Rp. 10.000 - Rp. 30.000</button>
                            <button className="hover:bg-blue-50 hover:border-primary hover:font-semibold hover:text-primary border px-3 py-2 rounded-md my-1 mx-1">Rp. 0 - Rp. 30.000</button>

                            <button className="hover:bg-blue-50 hover:border-primary hover:font-semibold hover:text-primary border px-3 py-2 rounded-md my-1 mx-1">Rp. 0 - Rp. 30.000</button>
                        </div>
                    </div>
                    <div className="w-3/4 pl-5 scrollY h-[calc(100vh-122px)]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 pb-5">
                            <div className="bg-white rounded-xl h-[340px] border hover:top-5 hover:z-10 hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk1.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>
                            <div className="bg-white rounded-xl h-[340px] border hover:top-5 hover:z-10 hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk2.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>
                            <div className="bg-white rounded-xl h-[340px] border hover:top-5 hover:z-10 hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk3.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>
                            <div className="bg-white rounded-xl h-[340px] border hover:top-5 hover:z-10 hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk4.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>
                            <div className="bg-white rounded-xl h-[340px] border hover:top-5 hover:z-10 hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk5.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>
                            <div className="bg-white rounded-xl h-[340px] border hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk6.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>
                            <div className="bg-white rounded-xl h-[340px] border hover:top-5 hover:z-10 hover:shadow-2xl">
                                <div className="h-1/2 bg-gray-200 rounded-t-lg ">
                                    <img src="/assets/produk7.jpg" alt="" className='w-full h-full rounded-t-lg' />
                                </div>
                                <div className="h-1/2 px-3 py-3">
                                    <h1 className='text-xl font-semibold leading-4'>RP. 500.000</h1>
                                    <s className='text-sm text-red-500'>Rp. 75.000</s>

                                    <p className='text-sm mt-2'>
                                        Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <div className="flex items-center py-2 justify-between">
                                        <div className="flex">
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm mr-1' />
                                            <span className='text-sm'>5</span>
                                        </div>
                                        <span className='text-sm ml-3'>100 Sold</span>
                                    </div>
                                    <span className='text-gray-400 text-sm mt-3'>Kab Bojonegoro</span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
