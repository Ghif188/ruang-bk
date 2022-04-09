import React from 'react'

export default function notfound(params) {
    return (
        <section className='flex h-screen bg-cover w-full'>
            <div className='bg-gradient-to-r from-blue-500 to-blue-700 justify-center items-center flex absolute w-full h-full'>
                <div className='text-center border-r-2 mr-4'>
                    <h1 className='text-white text-6xl md-max:text-4xl font-bold tracking-wider'>404</h1>
                </div>
                <div className="text-center text-4xl md-max:text-xl font-light text-white">
                    Not Found
                </div>
                {/* <div className='text-white text-9xl font-bold tracking-wider'>ok</div> */}
            </div>
        </section>
    )
}