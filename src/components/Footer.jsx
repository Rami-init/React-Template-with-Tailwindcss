import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black py-6 text-white'>
      <div className='flex flex-col-reverse  justify-between container px-6 py-8 space-y-12 mx-auto md:flex-row md:space-x-12 md:space-y-0'>
        <div className='flex flex-col pt-8 space-y-12 md:pt-0'>
          <img src="./img/logo.svg" className='text-white max-w-xs' alt=""/>
          <div className="flex space-x-3 items-center justify-between md:justify-start">
            <img src="./img/icon-facebook.svg" alt="" />
            <img src="./img/icon-pinterest.svg" alt="" />
            <img src="./img/icon-twitter.svg" alt="" />
            <img src="./img/icon-instegram.svg" alt="" />
            <img src="./img/icon-youtube.svg" alt="" />
          </div>
          <p className='text-greyLink text-sm text-center md:hidden'>copyright &copy; 2022, All right reversed.</p>
        </div>
        <div className='flex justify-between space-x-8'>
          <div className='flex flex-col text-base space-y-4'>
            <a href="/#/" className='text-white hover:text-greyLink'>Home</a>
            <a href="/#/" className='text-white hover:text-greyLink'>Pricing</a>
            <a href="/#/" className='text-white hover:text-greyLink'>Products</a>
            <a href="/#/" className='text-white hover:text-greyLink'>Aboute</a>
          </div>
          <div className='flex flex-col text-base space-y-4'>
            <a href="/#/" className='text-white hover:text-greyLink'>Caareers</a>
            <a href="/#/" className='text-white hover:text-greyLink'>Community</a>
            <a href="/#/" className='text-white hover:text-greyLink'>Privacy</a>
          </div>
        </div>
        <div className='flex flex-col space-y-8'>
          <input type="text" placeholder='add you mail' className='bg-white rounded-xl w-full md:max-w-xs px-4 py-1 focus:outline-none text-black ' />
          <button className='bg-brightLight text-white py-2 px-8 rounded-xl'>Subscribe</button>
          <p className='text-greyLink text-sm hidden md:block'>copyright &copy; 2022, All right reversed.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer