import React from 'react'
import Link from 'next/link'


export default function Navbar(){
    return(
        <nav className="bg-black">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flez items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                        <Link href="/" className="text-white self-center text-2xl rtl:space-x-reverse">To-Do Tracker</Link>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='container mx-auto flex justify-between items-center'>
                        <Link href="/signup" className='rounded-lg p-2'> Sign Up</Link>
                        <Link href="/signup" className='text-white rounded-lg p-2'> Sign Up</Link>
                        </div>
                    </div>
                    {/* <span class="self-center text-2xl font-semibold whitespace-nowrap 
                    dark:text-white">Flowbite</span> */}
                    {/*  
                    flex items-center space-x-3 rtl:space-x-reverse"
                    */}
                </div>
            </div>
            
        </nav>
    )
}