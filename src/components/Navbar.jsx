import React, { useState } from 'react'
const Navbar = ({darkMode, setDarkMode}) => {
  const [active, setActive] = useState(false)
  return (
    <div className='relative container mx-auto p-6'>
        {/* flex container */}
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="pt-2">
                <img src="./img/logo.svg" alt="" />
            </div>
            <div className={`space-x-6 ${active ? 'flex items-center absolute top-14 left-0 mx-auto py-4 max-w-xs transition duration-500 bg-white shadow-xl rounded-lg right-0 flex-col space-y-4 md:hidden': 'hidden md:flex'}`}> 
                <a href="/#/" className='hover:text-greyLink'>Pricing</a>
                <a href="/#/" className='hover:text-greyLink'>Products</a>
                <a href="/#/" className='hover:text-greyLink'>Aboute Us</a>
                <a href="/#/" className='hover:text-greyLink'>Careers</a>
                <a href="/#/" className='hover:text-greyLink'>Community</a>
            </div>
            <button className="py-2 px-4 hidden md:block bg-brightRed rounded-full text-white border-brightRed hover:bg-brightLight">Contact-us</button>
            <button onClick={()=>setActive(!active)} className='relative flex flex-col space-y-1 transition-all ease-in-out md:hidden'>
              <span className={`w-6 h-[2px] bg-black transition-all ease-in-out ${active && 'rotate-[215deg]'}`}></span>
              <span className={`w-6 h-[2px] bg-black transition-all ease-in-out ${active && 'hidden'}`}></span>
              <span className={`w-6 h-[2px] bg-black transition-all ease-in-out ${active && 'rotate-[147deg] -translate-y-[6px]'}`}></span>
            </button>
        </div>
    </div>
  )
}

export default Navbar