"use client"
import { SessionProvider } from "next-auth/react"
import '../../app/globals.css'
import Navbar from "@/components/navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.cdnfonts.com/css/open-sauce-one" rel="stylesheet" />
            </head>
            <body>
                <SessionProvider>
                    <Navbar />
                    <main className='mx-auto md:mx-10 mt-3 mb-10 px-5 md:px-0'>
                        {children}
                    </main >
                </SessionProvider>
            </body>
        </html>
    )
}
