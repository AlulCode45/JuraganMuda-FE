"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function Keranjang() {
    const [quantity, setQuantity] = useState(1)
    const [tipeAlamat, setTipeAlamat] = useState()

    return (
        <>
            <div className="md:flex md:items-center md:gap-3">
                <div className="w-full md:w-4/6 bg-white p-5 rounded-md shadow">
                    <div className="flex items-center my-4">
                        <div className="w-1/12 text-center">
                            <input type="checkbox" className='w-5 h-5 rounded-lg outline-none' />
                        </div>
                        <div className="w-5/12">
                            <div className="flex gap-4 items-center">
                                <div className="foto-produk">
                                    <Image width={100} height={100} src="https://down-id.img.susercontent.com/file/01f543f8875cdf2a179a3c6b0e6354c8" alt="" className='w-[100px] h-[100px] rounded-lg' />
                                </div>
                                <div className="keterangan-produk">
                                    <h1 className='font-semibold'>Baju sweter hangat</h1>
                                    <p className='text-gray-500 text-sm'>
                                        Hijau - XL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="3/12">
                            <div className="flex">
                                <button className="border border-gray-300 w-2/6">-</button>
                                <input type="number" placeholder='Jumlah Barang' className='w-4/6 text-center outline outline-1 outline-gray-300' min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                <button className="border border-gray-300 w-2/6">+</button>
                            </div>
                        </div>
                        <div className="w-4/12 text-end">
                            <h1 className='text-xl'>Rp 500.000</h1>
                        </div>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="w-1/12 text-center">
                            <input type="checkbox" className='w-5 h-5 rounded-lg outline-none' />
                        </div>
                        <div className="w-5/12">
                            <div className="flex gap-4 items-center">
                                <div className="foto-produk">
                                    <Image width={100} height={100} src="https://down-id.img.susercontent.com/file/01f543f8875cdf2a179a3c6b0e6354c8" alt="" className='w-[100px] h-[100px] rounded-lg' />
                                </div>
                                <div className="keterangan-produk">
                                    <h1 className='font-semibold'>Baju sweter hangat</h1>
                                    <p className='text-gray-500 text-sm'>
                                        Hijau - XL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="3/12">
                            <div className="flex">
                                <button className="border border-gray-300 w-2/6">-</button>
                                <input type="number" placeholder='Jumlah Barang' className='w-4/6 text-center outline outline-1 outline-gray-300' min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                <button className="border border-gray-300 w-2/6">+</button>
                            </div>
                        </div>
                        <div className="w-4/12 text-end">
                            <h1 className='text-xl'>Rp 500.000</h1>
                        </div>
                    </div>
                    <div className="flex items-center my-4">
                        <div className="w-1/12 text-center">
                            <input type="checkbox" className='w-5 h-5 rounded-lg outline-none' />
                        </div>
                        <div className="w-5/12">
                            <div className="flex gap-4 items-center">
                                <div className="foto-produk">
                                    <Image width={100} height={100} src="https://down-id.img.susercontent.com/file/01f543f8875cdf2a179a3c6b0e6354c8" alt="" className='w-[100px] h-[100px] rounded-lg' />
                                </div>
                                <div className="keterangan-produk">
                                    <h1 className='font-semibold'>Baju sweter hangat</h1>
                                    <p className='text-gray-500 text-sm'>
                                        Hijau - XL
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="3/12">
                            <div className="flex">
                                <button className="border border-gray-300 w-2/6">-</button>
                                <input type="number" placeholder='Jumlah Barang' className='w-4/6 text-center outline outline-1 outline-gray-300' min={1} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                <button className="border border-gray-300 w-2/6">+</button>
                            </div>
                        </div>
                        <div className="w-4/12 text-end">
                            <h1 className='text-xl'>Rp 500.000</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/6">
                    <div className="bg-white shadow p-5">
                        <h1 className='text-2xl font-bold mb-7'>Rincian Pembelian</h1>
                        <div className="flex justify-between items-center">
                            <h1 className='font-semibold'>Total Harga</h1>
                            <h1 className='text-xl font-semibold'>Rp 500.000</h1>
                        </div>
                        <hr className='my-3' />
                        <div className="flex justify-between items-center">
                            <h1>Jumlah Barang</h1>
                            <h1>4 Barang</h1>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <h1>Diskon</h1>
                            <input type='text' className='outline outline-1 outline-gray-400 px-2 py-1 uppercase rounded-sm' placeholder='Masukan kode voucher' />
                            {/* <h1><b className='text-red-500'>5%</b> ( <s>Rp 25.000</s> ) </h1> */}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <h1>Tujuan</h1>
                            <select className='outline outline-1 outline-gray-400 px-2 py-1 bg-white rounded-sm' placeholder='Masukan kode voucher' onChange={(e) => setTipeAlamat(e.target.value)}>
                                <option value="1">Alamat Rumah</option>
                                <option value="2">Lokasi Lain</option>
                            </select>
                        </div>
                        {
                            tipeAlamat == 2 ? (
                                <textarea name="" id="" className='outline outline-1 outline-gray-400 px-2 py-1 mt-3 w-full' placeholder='Masukan alamat'></textarea>
                            ) : ''
                        }

                        <button className='bg-primary rounded-md w-full py-3 mt-7 text-white font-semibold text-md'>Bayar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
