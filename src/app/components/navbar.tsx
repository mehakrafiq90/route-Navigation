import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='flex justify-between items-center  p-6 bg-gray-500'>
        <div>
            <h1 className='md:text-2xl ext-lg'>Mehak Rafiq</h1>
        </div>
        <div>
            <ul className='flex space-x-6 md:text-xl text-lg'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
    </header>
    </>
  )
}

export default Navbar