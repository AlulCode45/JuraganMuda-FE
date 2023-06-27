import { Bell, Camera, Mail, MapPin, ShoppingCart, Star } from 'react-feather'

export default function Navbar() {
    return (

        <header>
            <div className="w-screen mb-1 py-4 bg-white">
                <div className="container mx-auto flex justify-between items-center px-5 md:px-0">
                    <div id="icon">
                        <h1 className='text-2xl font-extrabold text-primary'>JuraganMuda</h1>
                    </div>
                    <div id="search" className='hidden md:block'>
                        <form className='flex gap-2'>
                            <input type="text" className='px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-gray-300 w-[700px]' placeholder='Cari Produk' />
                            <button className='bg-primary font-bold rounded-md py-1 px-6 text-white'>Cari</button>
                        </form>
                    </div>
                    <div id="menu" className='flex gap-3 items-center'>
                        <ShoppingCart className='text-gray-500' />
                        <Mail className='text-gray-500' />
                        <Bell className='text-gray-500' />
                        <img src="https://picsum.photos/200" alt="" className='rounded-full w-8 h-8 ml-3' />
                    </div>
                </div>
            </div>
            <div className='w-screen bg-white'>
                <div className='flex justify-between container mx-auto py-3 px-5 md:px-0 text-gray-600'>
                    <div id="rekomendasi" className='md:flex gap-5 hidden'>
                        <h1>Jasa Design</h1>
                        <h1>Botol Bekas</h1>
                    </div>
                    <div id="location" className='flex gap-2 md:text-base text-sm items-center'>
                        <MapPin className='text-gray-500 text-sm' />
                        <h1>Ship to : </h1>
                        <b>Sraturejo, Baureno, Jawa Timur</b>
                    </div>
                </div>
            </div>
        </header>
    )
}
