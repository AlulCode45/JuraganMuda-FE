"use client"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useState } from "react"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";

export default function Login() {

  const [nisn, setNisn] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      nisn: nisn,
      password: password,
      redirect: false
    })

    if (res?.status == 401) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'NISN / password ada yang salah',
      })
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <div className="bg-primary flex w-screen h-screen ">
        <div className="px-10 md:px-0 md:w-1/2 flex justify-center items-center">
          <div className="md:w-[500px]">
            <div className="form-head">
              <h1 className="text-white font-extrabold text-5xl">Selamat Datang di Juragan Muda</h1>
              <p className="text-white mb-5 mt-5 font-light leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus recusandae sit similique
                dolor nihil deleniti reiciendis, unde odio enim? Tempore, ma
              </p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input">
                <label htmlFor="" className="block text-white mb-2 font-semibold">NISN</label>
                <input type="text"
                  className="bg-white bg-opacity-30 rounded-lg text-white px-2 py-3 focus:outline-none w-full placeholder-gray-300"
                  placeholder="Masukan NISN" onChange={(e) => setNisn(e?.target?.value)} />
              </div>
              <div className="input mt-3">
                <label htmlFor="" className="block text-white mb-2 font-semibold">Password</label>
                <input type="password"
                  className="bg-white bg-opacity-30 rounded-lg text-white px-2 py-3 focus:outline-none w-full placeholder-gray-300"
                  placeholder="Masukan Password" onChange={(e) => setPassword(e?.target?.value)} />
              </div>
              <div className="flex">
                <div className="w-1/4">
                  <button
                    className="bg-[#F2994A] w-full  py-3 text-white font-semibold rounded-sm mt-7 text-sm" type="submit">Login</button>
                </div>
                <div className="w-1/4">
                  <button
                    className="w-full  py-3 text-white font-semibold rounded-md mt-7 text-md">Daftar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:w-1/2 md:block">
          <img src="/assets/login.svg" alt="" className="w-full h-full" />
        </div>
      </div>
    </>
  )
}
