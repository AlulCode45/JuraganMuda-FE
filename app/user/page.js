"use client"
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import DashboardMenu from '@/components/dashboard/DashboardMenu'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function UserDashboard() {
    const [user, setUser] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        const getUser = async () => {
            return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                headers: {
                    "Authorization": `Bearer ${session?.user?.remember_token}`
                }
            }).then((out) => {
                setUser(out?.data?.data)
            }).catch((err) => {
                console.log(err);
            })
        }
        getUser()
    }, [session])
    return (
        <>
            <DashboardLayout>
                <div className="flex gap-3">
                    <div className="w-3/12 p-2">
                        <DashboardMenu />
                    </div>
                    <div className="w-9/12 ">
                        <div className="bg-white p-5 w-full flex gap-7 items-center">
                            <div className="foto-profile w-1/4">
                                <Image src={user?.foto_profile ? user?.foto_profile : `${process.env.NEXT_PUBLIC_URL}/assets/default-user.png`}
                                    alt="Profile Picture"
                                    className="rounded-full w-52 h-52 border-2 border-gray-500" width={50} height={50} />
                            </div>
                            <div className="detail-profile w-3/4">
                                <h1 className="text-2xl font-semibold mt-4">{user?.nama}</h1>
                                <span className="text-gray-600 px-2 py-1 bg-primary text-sm bg-opacity-25 rounded-full">
                                    NISN : {user?.nisn}
                                </span>
                                <div className="mt-3">
                                    <p>Email: {user?.email}</p>
                                    <p>No Telepon: {user?.no_telp}</p>
                                    <hr className='my-2' />
                                    <div className='font-semibold'>Alamat: </div>
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <div>Dusun : {user?.dusun || '-'}</div>
                                            <div>RT: {user?.rt || '-'}</div>
                                            <div>RW: {user?.rw || '-'}</div>
                                            <div>Desa: {user?.desa || '-'}</div>
                                            <div>Kecamatan: {user?.kecamatan || '-'}</div>
                                        </div>
                                        <div className="w-1/2">
                                            <div>Kode Pos: {user?.kode_pos || '-'}</div>
                                            <div>Kabupaten/Kota: {user?.kabupaten_kota || '-'}</div>
                                            <div>Provinsi: {user?.provinsi || '-'}</div>
                                            <div>Negara: {user?.negara || '-'}</div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    )
}
