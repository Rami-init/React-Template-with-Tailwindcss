import React from 'react'

const Cta = () => {
  return (
    <div className='bg-brightLight mt-12'>
        <div className='container mx-auto flex justify-between flex-col items-center space-y-8 px-6 py-12 md:flex-row'>
            <h1 className="text-3xl text-white font-bold text-center md:text-left">
                Simplify who team work <br className='hidden md:block'/> today?
            </h1>
            <button className='text-brightLight rounded-full px-6 py-2 bg-white font-bold hover:bg-greyLight'>Get Started</button>
        </div>
    </div>
  )
}

export default Cta