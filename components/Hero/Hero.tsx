import Image from 'next/image';
import React from 'react';
import { HiStar } from 'react-icons/hi2';

interface Props { }

const Hero = () => {
    return <div className='w-screen my-2 h-64  sm:h-80 flex flex-col justify-center items-center bg-[url("/testpreparation/Page/cart/hero/bgimg.png")] bg-no-repeat bg-cover'>
        <div className='flex flex-col sm:flex-row p-8 justify-center items-center gap-4 sm:gap-40'>
            <div className='text-center sm:text-left '>
                <div className="text-white font-semibold my-2  lg:text-4xl text-2xl">
                    My Course Cart
                </div>
                <div className='flex justify-center sm:justify-start gap-2 w-fit lg:text-lg text-xs'>
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index}>
                        {index < Math.round(5) ? (
                            <HiStar className='text-[#ffb800] opacity-100' />
                        ) : (
                            <HiStar className='text-[#ffb800] opacity-30' />
                        )}
                    </div>
                ))}
                <span className='text-white'>
                    4.5
                </span>
                <span className='text-white'>
                    (Student 700k booked)
                </span>
            </div>
            </div>
            <div className='mt-4 sm:mt-0'>
                <Image
                    src="/testpreparation/Page/cart/hero/1.png"
                    width={320}
                    height={180}
                    alt="Checkout Course"
                    className='max-w-[8rem] max-h-[8rem] sm:max-w-full sm:max-h-full object-contain'
                />
            </div>
        </div>
    </div>

}

export default Hero