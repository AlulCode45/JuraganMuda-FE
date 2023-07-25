"use client"
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toRupiah from '@develoka/angka-rupiah-js'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default function Keranjang() {
    //TODO: Membuat api untuk mengupdate jumlah barang di keranjang dan menampilkan secara realtime di bagian harga produk
    const { data: session } = useSession()

    const [keranjang, setKeranjang] = useState([]);

    const [selectedProducts, setSelectedProducts] = useState({});
    const [tipeAlamat, setTipeAlamat] = useState()

    const handleCheckboxChange = (produk_id) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts[produk_id]) {
                const { [produk_id]: _, ...rest } = prevSelectedProducts;
                return rest;
            } else {
                const selectedProduct = keranjang.find((product) => product.produk_id === produk_id);
                return {
                    ...prevSelectedProducts,
                    [produk_id]: {
                        produk_id: produk_id,
                        jumlah: selectedProduct.jumlah,
                        harga: (selectedProduct?.harga_produk * selectedProduct?.jumlah)
                    },
                };
            }
        });
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedKeranjang = [...keranjang];
        updatedKeranjang[index].jumlah = newQuantity;
        setKeranjang(updatedKeranjang);
    };

    useEffect(() => {
        const getKeranjang = async () => {
            return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/keranjang`, {
                headers: {
                    "Authorization": `Bearer ${session?.user?.remember_token}`
                }
            }).then((out) => {
                // Group data keranjang by produk_id
                const groupedKeranjang = {};
                out?.data?.data.forEach((item) => {
                    if (groupedKeranjang[item.produk_id]) {
                        groupedKeranjang[item.produk_id].jumlah += item.jumlah;
                    } else {
                        groupedKeranjang[item.produk_id] = {
                            ...item,
                        };
                    }
                });

                setKeranjang(Object.values(groupedKeranjang));
            }).catch((err) => {
                console.log(err);
            });
        };
        getKeranjang();
    }, [session]);


    const hitungTotalHarga = () => {
        var totalHarga = 0;

        // Menggunakan loop untuk mengakses setiap produk dalam data
        for (const produkId in selectedProducts) {
            if (selectedProducts.hasOwnProperty(produkId)) {
                const produk = selectedProducts[produkId];
                totalHarga += produk.harga;
            }
        }

        return totalHarga;
    }


    useEffect(() => {
        console.log(selectedProducts);
    }, [selectedProducts]);
    return (
        <>
            <DashboardLayout>
                <div className="md:flex md:items-center md:gap-3">
                    <div className="w-full md:w-4/6 bg-white p-5 rounded-md shadow">
                        {
                            keranjang ? keranjang?.map((data, i) => (
                                <div className="flex items-center my-4" key={i}>
                                    <div className="w-1/12 text-center">
                                        <input
                                            type="checkbox"
                                            className='w-5 h-5 rounded-lg outline-none'
                                            checked={selectedProducts[data.produk_id] ? true : false}
                                            onChange={() => handleCheckboxChange(data.produk_id)}
                                        />
                                    </div>
                                    <div className="w-5/12">
                                        <div className="flex gap-4 items-center">
                                            <div className="foto-produk">
                                                <Image width={100} height={100} src="https://down-id.img.susercontent.com/file/01f543f8875cdf2a179a3c6b0e6354c8" alt="" className='w-[100px] h-[100px] rounded-lg' />
                                            </div>
                                            <div className="keterangan-produk">
                                                <h1 className='font-semibold'>{data?.nama_produk}</h1>
                                                <p className='text-gray-500 text-sm'>
                                                    @{toRupiah(data?.harga_produk, {
                                                        floatingPoint: 0,
                                                        formal: false
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="3/12">
                                        <div className="flex">
                                            <button className="border border-gray-300 w-2/6" onClick={() => {
                                                (data.jumlah > 1) ? handleQuantityChange(i, parseInt(data.jumlah) - 1) : ''
                                            }}>-</button>
                                            <input
                                                type="number"
                                                placeholder='Jumlah Barang'
                                                className='w-4/6 text-center outline outline-1 outline-gray-300'
                                                min={1}
                                                value={data?.jumlah}
                                                onChange={(e) => handleQuantityChange(i, e.target.value)}
                                            />
                                            <button className="border border-gray-300 w-2/6" onClick={() => {
                                                handleQuantityChange(i, parseInt(data.jumlah) + 1)
                                            }}>+</button>
                                        </div>
                                    </div>
                                    <div className="w-4/12 text-end">
                                        <h1 className='text-xl'>
                                            {toRupiah((data?.harga_produk * data?.jumlah), {
                                                floatingPoint: 0,
                                                formal: false
                                            })}
                                        </h1>
                                    </div>
                                </div>
                            )) : 'Keranjang Kosong'
                        }
                    </div>
                    <div className="w-full md:w-2/6">
                        <div className="bg-white shadow p-5">
                            <h1 className='text-2xl font-bold mb-7'>Rincian Pembelian</h1>
                            <div className="flex justify-between items-center">
                                <h1 className='font-semibold'>Total Harga</h1>
                                <h1 className='text-xl font-semibold'>
                                    {toRupiah(hitungTotalHarga(), {
                                        floatingPoint: 0,
                                        formal: false
                                    })}
                                </h1>
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
            </DashboardLayout>
        </>
    );
}
