import React, { useState } from 'react'

export default function FilterComponents() {

    const [categoryIsOpen, setCategoryIsOpen] = useState(true);
    const [conditionsIsOpen, setConditionsIsOpen] = useState(true);
    const categoryTogle = () => {
        setCategoryIsOpen(!categoryIsOpen);
    };
    const conditionsTogle = () => {
        setConditionsIsOpen(!conditionsIsOpen)
    }
    return (
        <>
            <h1 className='text-md font-semibold mb-2'>Filters</h1>
            <div className="bg-white h-auto p-4 rounded-md">
                <div className="flex items-center" onClick={categoryTogle}>
                    <div className="flex items-center">
                        <div id="filter">
                            <span className="mr-2 mt-3 text-md">Kategori</span>
                        </div>
                        <div id="icon">
                            <svg className={`h-4 w-4 transition-transform ${categoryIsOpen ? 'transform rotate-180' : ''
                                }`} width="20px" height="20px" viewBox="0 0 1.2 1.2" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1.2v1.2H0z" fill="none" /><g id="Shopicon"><path points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586 	" d="M0.6 0.729L0.235 0.365L0.165 0.435L0.6 0.871L1.035 0.435L0.965 0.365Z" /></g></svg>
                        </div>
                    </div>
                </div>
                {categoryIsOpen && (
                    <div className="ml-4 mt-2">
                        <div className="flex flex-col">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm">Option 1</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm">Option 2</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm">Option 3</span>
                            </label>
                        </div>
                    </div>
                )}

                <div className="flex items-center" onClick={conditionsTogle}>
                    <div className="flex items-center">
                        <div id="filter">
                            <span className="mr-2 mt-3 text-md">Kondisi</span>
                        </div>
                        <div id="icon">
                            <svg className={`h-4 w-4 transition-transform ${conditionsIsOpen ? 'transform rotate-180' : ''
                                }`} width="20px" height="20px" viewBox="0 0 1.2 1.2" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h1.2v1.2H0z" fill="none" /><g id="Shopicon"><path points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586 	" d="M0.6 0.729L0.235 0.365L0.165 0.435L0.6 0.871L1.035 0.435L0.965 0.365Z" /></g></svg>
                        </div>
                    </div>
                </div>
                {conditionsIsOpen && (
                    <div className="ml-4 mt-2">
                        <div className="flex flex-col">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm">Baru</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <span className="ml-2 text-sm">Bekas</span>
                            </label>
                        </div>
                    </div>
                )}

                {/* Range Harga */}
                <span className='mr-2 text-md '>Harga</span>
                <input type="text" className='w-full border border-gray-300 py-1 mt-2 px-3 rounded-md focus:outline-gray-400 text-sm' placeholder='Minimum Harga' />
                <input type="text" className='w-full border border-gray-300 py-1 mt-3 px-3 rounded-md focus:outline-gray-400 text-sm' placeholder='Maximum Harga' />
                <div className="flex flex-wrap mt-3">
                    <button className="hover:bg-blue-50 hover:border-primary hover:font-semibold hover:text-primary border px-3 py-2 rounded-md my-1 mx-1 text-sm">Rp. 10rb - Rp. 30rb</button>
                    <button className="hover:bg-blue-50 hover:border-primary hover:font-semibold hover:text-primary border px-3 py-2 rounded-md my-1 mx-1 text-sm">Rp. 0 - Rp. 100rb</button>
                    <button className="hover:bg-blue-50 hover:border-primary hover:font-semibold hover:text-primary border px-3 py-2 rounded-md my-1 mx-1 text-sm">Rp. 110rb - Rp. 300rb</button>
                </div>
            </div>
        </>
    )
}
