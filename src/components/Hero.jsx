import React from 'react'

const Hero = () => {
  return (
    <div className='flex container mx-auto px-6 flex-col-reverse items-center mt-10 space-x-0 md:flex-row md:space-x-0'>
      <div className="flex flex-col space-y-12 mb-32 md:w-1/2">
        <h1 className="max-w-md text-5xl font-bold text-center italic md:text-left">
          Bring Everyone together to build better products
        </h1>
        <p className='text-greyLink text-sm text-center font-semibold max-w-sm md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni modi quo eum totam ad perspiciatis? Iste dicta, quasi quia laudantium est
        </p>
        <div className="flex flex-col items-center max-w-sm">
        <button className='text-white bg-brightRed mt-4 px-6 py-2 font-semibold  rounded-full baseline hover:bg-brightLight'>Get Started</button>
        </div>
      </div>
      <div>
      </div>
        <div className='md:w-1/2'>
          <img src='./img/illustration-intro.svg' />
        </div>
    </div>
  )
}

export default Hero