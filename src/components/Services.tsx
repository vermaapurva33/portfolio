import React from 'react'

function Services() {
  return (
    <div className='bg-black p-4 mt-0.5 ml-0.5 mr-0.5 mb-2 rounded-b-md drop-shadow-sm drop-shadow-amber-50 flex flex-col justify-center items-center'>
        <div className='m-2 p-4'>
            <p className='text-3xl text-white font-bold hover:scale-110'>Skills</p>
        </div>
        <div className='m-2 p-4 flex flex-row justify-around '>
            <div className='p-6 flex flex-col items-center border-1 border-blue-400 rounded-2xl hover:border-black hover:scale-110 hover:bg-gray-950 hover:shadow-blue-300 hover:shadow-md m-5'>
                <img src="/js.webp" alt="not found" className='w-40 h-40' />
                <p className='text-2xl text-white m-2  hover:text-amber-100'>Javascript</p>
            </div>
            <div className='p-6 flex flex-col items-center border-1 border-blue-400 rounded-2xl hover:border-black hover:scale-110 hover:bg-gray-950 hover:shadow-blue-300 hover:shadow-md m-5'>
                <img src="/python.webp" alt="not found" className='w-40 h-40 rounded-2xl' />
                <p className='text-2xl text-white m-2 hover:text-amber-100'>Python </p>
            </div>
            <div className='p-6 flex flex-col items-center border-1 border-blue-400 rounded-2xl hover:border-black hover:scale-110 hover:bg-gray-950 hover:shadow-blue-300 hover:shadow-md m-5'>
                <img src="/reactjs.webp" alt="not found" className='w-40 h-40 rounded-2xl' />
                <p className='text-2xl text-white m-2 hover:text-amber-100'>React JS </p>
            </div>
            <div className='p-6 flex flex-col items-center border-1 border-blue-400 rounded-2xl hover:border-black hover:scale-110 hover:bg-gray-950 hover:shadow-blue-300 hover:shadow-md m-5'>
                <img src="/node.webp" alt="not found" className='w-40 h-40 rounded-2xl' />
                <p className='text-2xl text-white m-2'>Loan </p>
            </div>

        </div>

    </div>
  )
}

export default Services;