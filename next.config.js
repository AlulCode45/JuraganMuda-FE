/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/uploads/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/assets/**',
            },
            {
                protocol: 'https',
                hostname: 'down-id.img.susercontent.com',
                port: '',
                pathname: '/file/**',
            },
            {
                protocol: 'https',
                hostname: 'images.tokopedia.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
module.exports = nextConfig
