import React from 'react'


function Navigation() {
  return (
    <nav className='bg-black p-4 mt-0.5 ml-0.5 mr-0.5 mb-2 rounded-b-md grid-cols-2 flex justify-between drop-shadow-sm drop-shadow-amber-50'>
        {/* <div className=''>
            <img src="../public/bank_logo.webp" alt="hello" className='w-40 h-30 rounded-2xl'/>
        </div> */}
        <div className='text-white text-2xl align-middle font-bold '>
            <p>Apurva Verma</p>

        </div>
        <div className='flex justify-end '>
            <a href="/" className='text-white hover:text-gray-300 m-2'>Home</a>
            <a href="/about" className='text-white hover:text-gray-300 m-2'>About</a>
            <a href="/services" className='text-white hover:text-gray-300 m-2'>Contact</a>

        </div>

    </nav>
  )
}

export default Navigation;