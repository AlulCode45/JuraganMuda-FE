/* eslint-disable @next/next/no-img-element */
"use client"
import Navbar from '@/components/navbar'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { BsCurrencyDollar, BsTruck } from 'react-icons/bs'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import toRupiah from '@develoka/angka-rupiah-js';
import Image from 'next/image'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

export default function ShowProduct({ params }) {
    const { data: session } = useSession()
    const router = useRouter()

    const [quantity, setQuantity] = useState(1)
    const [page, setPage] = useState('deskripsi')

    const [product, setProduct] = useState()
    const [penjual, setPenjual] = useState([])

    const [activeImg, setActiveImg] = useState(0)

    const handleTambahKeranjang = async () => {
        if (session?.user) {
            return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/keranjang`, {
                produk_id: params?.product_id,
                user_id: session?.user?.id,
                jumlah: quantity.toString()
            }, {
                headers: {
                    "Authorization": `Bearer ${session?.user?.remember_token}`
                }
            }).then((out) => {
                console.log(out);
                iziToast.success({
                    title: 'Berhasil',
                    message: 'Menambahkan ke keranjang',
                })
            }).catch((err) => {
                iziToast.error({
                    title: 'Gagal',
                    message: 'Menambahkan ke keranjang'
                })
                console.log(err);
            })
        }
        else {
            iziToast.error({
                title: 'Tidak memiliki akses',
                message: 'Silahkan login'
            })
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/${params?.product_id}`, {
                headers: {
                    'Authorization': `Bearer ${session?.user?.remember_token}`
                }
            }).then((out) => {
                if (out.data.data[0]) {
                    setProduct(out?.data?.data?.[0])
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Produk tidak ditemukan',
                    })
                    router.push('/')
                }
            }).catch((err) => {
                console.log(err);
            })
        }

        getProduct()
    }, [params, router, session])

    useEffect(() => {
        const getToko = async (id_toko) => {
            return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/toko/${id_toko}`)
                .then((out) => {
                    setPenjual(out?.data?.data)
                }).catch((err) => {
                    console.log(err);
                })
        }
        getToko(product?.id)

    }, [product])

    return (
        <>
            <Navbar />
            <div className="md:mx-10 mt-3 border">
                <div className="md:flex md:gap-10">
                    <div className="md:w-1/4">
                        <Image src={product?.foto_produk[activeImg] ? product?.foto_produk?.[activeImg] : `${process.env.NEXT_PUBLIC_URL}/assets/no-image.png`} className='h-[300px] rounded-md' width={300} height={300} alt="" />
                        <div className="flex gap-3 mt-3 w-full">
                            {
                                product?.foto_produk ? product?.foto_produk?.map((data, i) => (
                                    <Image src={data} width={50} height={50} alt="" className={`w-[55px] h-[55px] rounded-lg hover:scale-110 ease-in duration-150 ${activeImg === i ? 'border-primary border-2' : ''}`} key={i} onClick={() => {
                                        setActiveImg(i)
                                    }} />
                                )) : ''
                            }
                        </div>
                    </div>
                    <div className="md:w-2/4 scrollY h-[calc(100vh-122px)] mt-5 md:mt-0">
                        <hr className='md:hidden border border-gray-400 mb-3' />
                        <div className={page == 'deskripsi' ? '' : 'hidden'}>
                            <h1 className='text-xl '>{product?.nama_produk} </h1>
                            <span className='font-semibold mt-2 text-2xl'>{product?.harga_produk ? toRupiah(product?.harga_produk, { floatingPoint: 0, formal: false }) : ''}</span>

                            <div className="flex items-center py-2 ">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='text-yellow-500' width={22} height={22} viewBox="0 0 24 24"><g id="feStar0" fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}><g id="feStar1" fill="currentColor" fillRule="nonzero"><path id="feStar2" d="M12.5 17.925L6.629 21l1.121-6.512L3 9.875l6.564-.95L12.5 3l2.936 5.925l6.564.95l-4.75 4.613L18.371 21z" /></g></g></svg>

                                    <span className='text-sm'>5</span>
                                </div>
                                <span className='text-sm ml-3'>| 100 Sold</span>
                            </div>
                            <hr />
                            <span className='flex gap-2 mt-4 text-sm items-center'>
                                <BsTruck className='text-gray-400 text-xl' />
                                Sent From <b>{penjual?.alamat}</b>
                            </span>
                            <span className='flex gap-2 mt-4 text-sm items-center'>
                                <BsCurrencyDollar className='text-gray-400 text-xl' />
                                Shipping Cost <b>Rp. 50.0000</b>
                            </span>
                            <span className='flex gap-2 mt-4 text-sm items-center'>
                                <TbTruckDelivery className='text-gray-400 text-xl' />
                                Estimated Delivery <b>3 Days</b>
                            </span>
                            <hr />
                            <div className="flex gap-5 mt-5">
                                <button className='border-x-0 border-t-0 border-2 border-b-primary px-7 py-2 font-bold text-primary' onClick={() => {
                                    setPage("deskripsi")
                                }}>Deskripsi</button>
                                {/* <button className='border-0 px-7 py-2 text-gray-500' onClick={() => {
                                    setPage("komentar")
                                }}>Komentar</button> */}
                            </div>
                            <div className='mt-3 text-gray-600 pb-10'>
                                <h2 className="text-lg font-bold mb-2">Deskripsi Produk:</h2>
                                <div className="text-sm prose prose-lg" dangerouslySetInnerHTML={{ __html: product?.deskripsi_produk }}>
                                </div>

                            </div>
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
                        </div>
                    </div>
                    <div className="md:w-1/4 h-auto  flex items-start">
                        <div className="bg-white py-7 px-3 rounded-md">
                            <h1 className='mb-2 text-md'>Set Quantity</h1>
                            <div className="flex w-full">
                                <button className="bg-primary bg-opacity-75 font-extrabold text-xl py-2 text-white w-2/12 rounded-tl-xl rounded-bl-xl"
                                    onClick={() => {
                                        if (quantity > 1) {
                                            setQuantity(parseInt(quantity) - 1)
                                        }
                                    }}>-</button>
                                <input type="number" placeholder='Jumlah Barang' className='w-8/12 px-3 focus:outline-none border border-gray-400 text-center' value={quantity} onChange={(e) => {
                                    setQuantity(e.target.value)
                                }} min={1} />
                                <button className="bg-primary bg-opacity-75 font-extrabold text-xl py-2 text-white w-2/12 rounded-tr-xl rounded-br-xl"
                                    onClick={() => {
                                        setQuantity(parseInt(quantity) + 1)
                                    }}>+</button>
                            </div>
                            <span className='text-xs'>Only <b className='text-primary'>10 Items</b> Left !</span>
                            {/* <h1 className='mt-3 text-sm'>Add Notes</h1>
                            <textarea name="" id="" className='w-full border border-gray-400 mt-2 focus:outline-none p-3 rounded-md text-sm' rows={3} placeholder='Type Here...'></textarea> */}

                            <div className="flex justify-between mt-3 items-center">
                                <h1 className='text-base'>Sub Total</h1>
                                <h1 className='font-bold text-lg'>Rp. 500.000</h1>
                            </div>

                            <div className="flex gap-3 mt-5">
                                <button className='text-white bg-primary w-full py-2 rounded-md font-semibold' type='button'>Buy Now</button>
                                <button className='text-primary border border-primary bg-white w-full rounded-md font-semibold' type='button' onClick={
                                    () => {
                                        handleTambahKeranjang()
                                    }
                                }>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
