import { useRouter } from 'next/navigation'
import React from 'react'

export default function DashboardMenu() {
    const router = useRouter()
    return (
        <ul className='bg-white'>
            <li className='block py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer ' onClick={() => {
                router.push('/user')
            }}>Profile</li>
            <li className='block py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer ' onClick={() => {
                router.push('/user/toko')
            }}> Toko</li>
            <li className='block py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer ' onClick={() => {
                router.push('/user/pesanan')
            }}>Pesanan</li>
            <li className='block py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer ' onClick={() => {
                router.push('/user/riwayat-pembelian')
            }}>Riwayat Pembelian</li>
            <li className='block py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer ' onClick={() => {
                router.push('/user/penarikan-uang')
            }}>History Penarikan Uang</li>
            <li className='block py-2 px-2 hover:bg-gray-100 rounded-md cursor-pointer ' onClick={() => {
                router.push('/user/riwayat-pembelian')
            }}>History Penjualan</li>
        </ul>
    )
}
