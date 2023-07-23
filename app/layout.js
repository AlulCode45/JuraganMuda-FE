"use client"
import { SessionProvider } from "next-auth/react"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/open-sauce-one" rel="stylesheet" />
      </head>
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
