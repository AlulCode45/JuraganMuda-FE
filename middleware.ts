import { withAuth } from "next-auth/middleware"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        // console.log(req.nextauth.token)
    },
    {
        callbacks: {
            authorized: ({ token }) => token != undefined,
        },
        pages: {
            signIn: '/auth/login'
        },
        secret: process.env.NEXT_PUBLIC_SECRET
    }
)

export const config = { matcher: ["/user/:path*"] }