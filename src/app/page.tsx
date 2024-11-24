'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter();

  return (
    <>
      <section className='flex flex-col md:flex-row justify-between items-center md:py-0 py-5 px-6 w-full h-[90vh] md:h-[80vh] bg-gray-800'>
        <div className='text-white text-center md:text-left mb-6 md:mb-0'>
          <h1 className='text-2xl md:text-4xl my-2'> Mehak Rafiq </h1>
          <h2 className='text-sm md:text-base lg:text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sapiente aperiam eaque. <br /> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sapiente aperiam eaque. <br /> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sapiente aperiam eaque 
          </h2>
          <button 
            type='button' 
            className='bg-gray-950 text-white text-lg md:text-2xl p-2 md:p-3 my-4 rounded-md' 
            onClick={() => router.push('/about')}
          >
            About Me
          </button>
        </div>
        <div>
          <Image 
            src={'/mehak.png'} 
            width={350} 
            height={350} 
            alt='Mehak' 
            className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full'
          />
        </div>
      </section>
    </>
  )
}

export default Home;

