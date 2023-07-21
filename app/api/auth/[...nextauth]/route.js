import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                nisn: { label: "NISN", type: "number", placeholder: 'Masukan nisn' },
                password: { label: "Password", type: "password", placeholder: "Masukan password" }
            },
            async authorize(credentials, req) {
                const { nisn, password } = credentials;
                return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, JSON.stringify({
                    nisn: nisn,
                    password: password
                }), {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((user) => {
                    if (user) {
                        return user?.data?.data
                    } else throw new Error()
                }).catch(() => {
                    return null
                })
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token
            return session
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }