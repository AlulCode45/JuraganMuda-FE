"use client"
import Navbar from '@/components/navbar'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Bell, Box, Camera, DollarSign, Mail, MapPin, ShoppingCart, Star, Truck } from 'react-feather'

export default function ShowProduct() {
    const [quantity, setQuantity] = useState(1)
    const [page, setPage] = useState('deskripsi')
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-3 mb-10 px-5 md:px-0">
                <div className="md:flex md:gap-5">
                    <div className="md:w-3/12">
                        <img src="/assets/produk1.jpg" alt="" />
                        <div className="flex gap-3 mt-3 w-full">
                            <img src="/assets/produk1.jpg" alt="" className='w-[95px] h-[95px] rounded-lg border hover:scale-110 ease-in duration-150' />
                            <img src="/assets/produk2.jpg" alt="" className='w-[95px] h-[95px] rounded-lg border hover:scale-110 ease-in duration-150' />
                            <img src="/assets/produk3.jpg" alt="" className='w-[95px] h-[95px] rounded-lg border hover:scale-110 ease-in duration-150' />
                        </div>
                    </div>
                    <div className="md:w-6/12 md:scrollY md:h-[calc(100vh-122px)] md:pb-10 mt-5 md:mt-0">
                        <hr className='md:hidden border border-gray-400 mb-3' />
                        <div className={page == 'deskripsi' ? '' : 'hidden'}>
                            <h1 className='text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicin. </h1>
                            <span className='font-semibold mt-2 text-3xl'>Rp. 500.000</span>

                            <div className="flex items-center py-2 mt-2">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='text-yellow-500' width={22} height={22} viewBox="0 0 24 24"><g id="feStar0" fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}><g id="feStar1" fill="currentColor" fillRule="nonzero"><path id="feStar2" d="M12.5 17.925L6.629 21l1.121-6.512L3 9.875l6.564-.95L12.5 3l2.936 5.925l6.564.95l-4.75 4.613L18.371 21z" /></g></g></svg>

                                    <span className='text-sm'>5</span>
                                </div>
                                <span className='text-sm ml-3'>| 100 Sold</span>
                            </div>
                            <hr />
                            <span className='flex gap-4 mt-4'>
                                <Truck className='text-gray-400' />
                                Sent From <b>Bojonegoro , Jawa Timur, Indonesia</b>
                            </span>
                            <span className='flex gap-4 mt-2'>
                                <DollarSign className='text-gray-400' />
                                Shipping Cost <b>Rp. 50.0000</b>
                            </span>
                            <span className='flex gap-4 mt-2'>
                                <Box className='text-gray-400' />
                                Estimated Delivery <b>3 Days</b>
                            </span>
                            <hr />
                            <div className="flex gap-5 mt-5">
                                <button className='border-x-0 border-t-0 border-2 border-b-primary px-7 py-2 font-bold text-primary' onClick={() => {
                                    setPage("deskripsi")
                                }}>Deskripsi</button>
                                <button className='border-0 px-7 py-2 text-gray-500' onClick={() => {
                                    setPage("komentar")
                                }}>Komentar</button>
                            </div>
                            <p className='mt-3 text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto? Animi totam recusandae nisi quidem quam hic quisquam! Perferendis, perspiciatis. Provident ipsum autem natus harum ut. Praesentium perspiciatis beatae eaque.
                                Asperiores quod enim aspernatur non praesentium vitae perferendis hic illum! Corporis delectus, vero, aliquid sunt saepe voluptate facere unde ipsa velit autem odit dolorum tempora maiores! Obcaecati in deleniti quo.
                                Excepturi magnam delectus hic rem eligendi, saepe tempora eveniet possimus repudiandae officia fuga quas incidunt distinctio aut neque veritatis, itaque rerum temporibus sapiente modi! Quos consectetur eum placeat repudiandae harum.
                                Illum excepturi veniam eius non ut quod nesciunt, perspiciatis nisi exercitationem mollitia earum ullam doloribus dignissimos, hic cupiditate pariatur. Eaque, amet! Officia adipisci maxime cumque dolore! Culpa, facere. A, odio?
                                Tempora adipisci fugit, omnis soluta ea tempore vitae perspiciatis? Perspiciatis architecto, voluptate explicabo unde sunt, recusandae placeat quaerat consequatur excepturi ut sapiente, doloribus veritatis cum fugiat impedit voluptates. Unde, harum.
                            </p>
                        </div>
                        <div className={page == 'komentar' ? '' : 'hidden'}>
                            <div className="flex gap-5 mt-5">
                                <button className='border-0 px-7 py-2 text-gray-500' onClick={() => {
                                    setPage("deskripsi")
                                }}>Deskripsi</button>
                                <button className='border-x-0 border-t-0 border-2 border-b-primary px-7 py-2 font-bold text-primary' onClick={() => {
                                    setPage("komentar")
                                }}>Komentar</button>
                            </div>
                            <div className="container bg-white mx-auto py-3 mt-4 rounded-md">
                                <div className="flex gap-5 md:gap-2">
                                    <div className="w-1/12 my-auto">
                                        <img src="https://picsum.photos/200" alt="" className='rounded-full w-8 h-8 ml-3' />
                                    </div>
                                    <div className="w-9/12 my-auto">
                                        <h1 className='font-semibold'>AlulCode</h1>
                                        <p className='text-gray-400'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sunt et, aliquam deserunt hic ipsa incidunt omnis dolores voluptatibus voluptates harum itaque dolore. Earum aspernatur inventore officia explicabo veniam quaerat?
                                        </p>

                                        <p className='text-gray-400 mt-3 text-sm'>16/06/2023</p>
                                    </div>
                                </div>
                                <div className="flex justify-end px-5">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <span className='ml-1'>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container bg-white mx-auto py-3 mt-4 rounded-md">
                                <div className="flex gap-5 md:gap-2">
                                    <div className="w-1/12 my-auto">
                                        <img src="https://picsum.photos/200" alt="" className='rounded-full w-8 h-8 ml-3' />
                                    </div>
                                    <div className="w-9/12 my-auto">
                                        <h1 className='font-semibold'>AlulCode</h1>
                                        <p className='text-gray-400'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sunt et, aliquam deserunt hic ipsa incidunt omnis dolores voluptatibus voluptates harum itaque dolore. Earum aspernatur inventore officia explicabo veniam quaerat?
                                        </p>

                                        <p className='text-gray-400 mt-3 text-sm'>16/06/2023</p>
                                    </div>
                                </div>
                                <div className="flex justify-end px-5">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <span className='ml-1'>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container bg-white mx-auto py-3 mt-4 rounded-md">
                                <div className="flex gap-5 md:gap-2">
                                    <div className="w-1/12 my-auto">
                                        <img src="https://picsum.photos/200" alt="" className='rounded-full w-8 h-8 ml-3' />
                                    </div>
                                    <div className="w-9/12 my-auto">
                                        <h1 className='font-semibold'>AlulCode</h1>
                                        <p className='text-gray-400'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sunt et, aliquam deserunt hic ipsa incidunt omnis dolores voluptatibus voluptates harum itaque dolore. Earum aspernatur inventore officia explicabo veniam quaerat?
                                        </p>

                                        <p className='text-gray-400 mt-3 text-sm'>16/06/2023</p>
                                    </div>
                                </div>
                                <div className="flex justify-end px-5">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <span className='ml-1'>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container bg-white mx-auto py-3 mt-4 rounded-md">
                                <div className="flex gap-5 md:gap-2">
                                    <div className="w-1/12 my-auto">
                                        <img src="https://picsum.photos/200" alt="" className='rounded-full w-8 h-8 ml-3' />
                                    </div>
                                    <div className="w-9/12 my-auto">
                                        <h1 className='font-semibold'>AlulCode</h1>
                                        <p className='text-gray-400'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sunt et, aliquam deserunt hic ipsa incidunt omnis dolores voluptatibus voluptates harum itaque dolore. Earum aspernatur inventore officia explicabo veniam quaerat?
                                        </p>

                                        <p className='text-gray-400 mt-3 text-sm'>16/06/2023</p>
                                    </div>
                                </div>
                                <div className="flex justify-end px-5">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-sm' />
                                        <span className='ml-1'>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/12 bg-white md:h-screen mt-4 md:mt-0 p-5 md:p-3">
                        <h1 className='mb-2 text-lg'>Set Quantity</h1>
                        <div className="flex w-full">
                            <button className="bg-primary font-extrabold text-xl py-3 text-white w-2/12 rounded-tl-xl rounded-bl-xl"
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(parseInt(quantity) - 1)
                                    }
                                }}>-</button>
                            <input type="number" placeholder='Jumlah Barang' className='w-8/12 py-3 px-3 focus:outline-none border border-gray-400 text-center' value={quantity} onChange={(e) => {
                                setQuantity(e.target.value)
                            }} min={1} />
                            <button className="bg-primary font-extrabold text-xl py-3 text-white w-2/12 rounded-tr-xl rounded-br-xl"
                                onClick={() => {
                                    setQuantity(parseInt(quantity) + 1)
                                }}>+</button>
                        </div>
                        <span className='text-xs'>Only <b className='text-primary'>10 Items</b> Left !</span>
                        <h1 className='mt-3'>Add Notes</h1>
                        <textarea name="" id="" className='w-full border border-gray-400 mt-2 focus:outline-none p-3 rounded-lg' rows={5} placeholder='Type Here...'></textarea>

                        <div className="flex justify-between mt-3">
                            <h1 className='text-md'>Sub Total</h1>
                            <h1 className='font-semibold text-2xl'>Rp. 500.000</h1>
                        </div>

                        <button className='text-white bg-primary w-full py-3 rounded-xl mt-5 font-semibold'>Buy Now</button>
                        <button className='text-primary border border-primary bg-white w-full py-3 rounded-xl mt-3 font-semibold'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
