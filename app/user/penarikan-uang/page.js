"use client"
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import DashboardMenu from '@/components/dashboard/DashboardMenu'
import Image from 'next/image'
import React from 'react'

export default function UserDashboard() {
    const historyData = [
        {
            id: 'TFBNK#1',
            type: 'Transfer',
            date: '2023-07-25 08:30',
            destinationAccount: '1234567890',
            amount: 'RP 500.000',
            status: 'Selesai',
        },
        {
            id: 'TFBNK#2',
            type: 'Transfer',
            date: '2023-07-24 14:15',
            destinationAccount: '0987654321',
            amount: 'RP 1.500.000',
            status: 'Selesai',
        },
        // Add more dummy data as needed
    ];
    return (
        <>
            <DashboardLayout>
                <div className="flex gap-3">
                    <div className="w-3/12  p-2">
                        <DashboardMenu />
                    </div>
                    <div className="w-9/12 ">
                        <div className="bg-white p-5">
                            <div className="flex justify-between mb-5 items-center">
                                <h1 className='font-semibold text-md'>Sisa Uang : Rp. 2.000.000</h1>
                                <button className='bg-primary py-2 px-3 rounded-md text-white font-semibold'>Tarik uang</button>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal & Waktu
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            ID Transfer
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Rekening Tujuan
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Jumlah
                                        </th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {historyData.map((withdrawal) => (
                                        <tr key={withdrawal.id} className={withdrawal.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                            <td className="px-6 py-4 whitespace-no-wrap">{withdrawal.type}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{withdrawal.date}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{withdrawal.id}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{withdrawal.destinationAccount}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{withdrawal.amount}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">
                                                <span className='bg-green-200 border border-green-500 p-2 rounded-full text-xs'>{withdrawal.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
