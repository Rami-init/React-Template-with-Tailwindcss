import React from 'react'
const Testimoniales = () => {
  return (
    <div className="max-w-6xl container mx-auto items-center mt-32 text-centr flex flex-col space-y-32">
        <h1 className="text-3xl font-bold text-center">
            What's Diffrent Aboute Manage?
        </h1>
         <div  className="flex justify-center items-center space-x-8">
            <div className="flex flex-col  items-center text-center bg-greyLight space-y-6 rounded-lg pb-4">
                <img src="./img/avatar-anisha.png" className='w-16 h-16 rounded-full -mt-8' alt="" />
                <h3 className="text-xl font-bold">Anisha</h3>
                <p className='text-greyLink text-sm'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non nihil impedit ab sequi? Ducimus quas voluptatum dicta at temporibus"</p>
            </div>
            <div className="hidden flex-col  items-center text-center bg-greyLight space-y-6 rounded-lg pb-4 sm:flex">
                <img src="./img/avatar-ali.png" className='w-16 h-16 rounded-full -mt-8' alt="" />
                <h3 className="text-xl font-bold">Ali</h3>
                <p className='text-greyLink text-sm'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non nihil impedit ab sequi? Ducimus quas voluptatum dicta at temporibus"</p>
            </div>
            <div className="hidden flex-col  items-center text-center bg-greyLight space-y-6 rounded-lg pb-4  md:flex">
                <img src="./img/avatar-richard.png" className='w-16 h-16 rounded-full -mt-8' alt="" />
                <h3 className="text-xl font-bold">Richard</h3>
                <p className='text-greyLink text-sm'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non nihil impedit ab sequi? Ducimus quas voluptatum dicta at temporibus"</p>
            </div>
            <div className="hidden flex-col  items-center text-center bg-greyLight space-y-6 rounded-lg  pb-4 lg:flex">
                <img src="./img/avatar-shanai.png" className='w-16 h-16 rounded-full -mt-8' alt="" />
                <h3 className="text-xl font-bold">Shanai</h3>
                <p className='text-greyLink text-sm'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae non nihil impedit ab sequi? Ducimus quas voluptatum dicta at temporibus"</p>
            </div>
        </div>
        <button className='rounded-full px-6 py-2 text-white w-32 bg-brightRed hover:bg-brightLight'>Get Started</button>
    </div>
  )
}

export default Testimoniales