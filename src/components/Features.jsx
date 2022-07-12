import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col container px-4 mt-10 mx-auto space-y-12 md:flex-row md:space-y-0'>
        <div className='flex flex-col space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-left'>
                What's Diffrent Aboute Mange? 
            </h1>
            <p className="max-w-sm text-sm text-greyLink text-center md:text-left">
                Est voluptatem veniam possimus fugiat beatae, enim recusandae modi totam. Sint repellat quos tempore obcaecati rem odit fuga eveniet, quis nobis veniam.
            </p>
        </div>
        <div className='flex flex-col space-y-8 md:w-1/2'>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
                <div className="rounded-l-full mb-4 bg-brightSuperLight md:bg-transparent">
                    <div className=' flex items-center space-x-2 text-xl pr-2'>
                        <div className='rounded-full px-2 text-white bg-brightLight'>
                            01
                        </div>
                        <h3 className="text-base font-bold">
                            Track Company-wide progress
                        </h3>
                    </div>
                </div>
                <p className='text-greyLink max-w-lg pl-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio ipsum deserunt, iste blanditiis harum, voluptatem porro commodi quasi adipisci numquam illo rem qui excepturi exercitationem odio consequuntur magni voluptate.
                </p>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
                <div className="rounded-l-full mb-4 bg-brightSuperLight md:bg-transparent">
                    <div className=' flex items-center space-x-2 text-xl pr-2'>
                        <div className='rounded-full px-2 text-white bg-brightLight'>
                            02
                        </div>
                        <h3 className="text-base font-bold">
                            Advanced Built-in Reportes
                        </h3>
                    </div>
                </div>
                <p className='text-greyLink max-w-lg pl-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio ipsum deserunt, iste blanditiis harum, voluptatem porro commodi quasi adipisci numquam illo rem qui excepturi exercitationem odio consequuntur magni voluptate.
                </p>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
                <div className="rounded-l-full mb-4 bg-brightSuperLight md:bg-transparent">
                    <div className=' flex items-center space-x-2 text-xl pr-2'>
                        <div className='rounded-full px-2 text-white bg-brightLight'>
                            03
                        </div>
                        <h3 className="text-base font-bold">
                            Everything You Need In One Place 
                        </h3>
                    </div>
                </div>
                <p className='text-greyLink max-w-lg pl-6'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio ipsum deserunt, iste blanditiis harum, voluptatem porro commodi quasi adipisci numquam illo rem qui excepturi exercitationem odio consequuntur magni voluptate.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Features