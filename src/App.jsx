import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "min-h-screen bg-[#1a1a1a] transition-colors duration-300">
    <Navigation />


    <main>
      <div className='bg-black p-4 mt-0.5 ml-0.5 mr-0.5 mb-2 rounded-b-md drop-shadow-sm drop-shadow-amber-50 flex flex-row'>
        <div className='mt-1 mb-1 w-1/2 rounded-4xl flex flex-col justify-center items-center'>
          <img src="/profile2.jpeg" alt="" className='rounded-full overflow-hidden w-50 h-50 hover:scale-110 hover:shadow-md hover:shadow-amber-100'/>
          <p className='text-2xl text-shadow-indigo-400 text-amber-50 font-extrabold m-4'>Apurva Verma</p>
          <p className='text-2xl text-shadow-indigo-400 text-amber-50'>Stuednt at PDPM IIITDM Jabalpur</p>
          <p className='text-2xl text-shadow-indigo-400 text-amber-50'></p>
        </div>
        <div className='mt-1 mb-1 ml-2 flex flex-col items-center w-1/2 '>
            <p className='text-2xl text-white mb-10 font-serif'>About Me</p>
            <marquee behavior="" direction="up" className=''>
              <p className='text-white m-3 p-4 hover:font-bold'>Hi, I’m Apurva Verma — a curious learner and creative thinker from Patna, Bihar, currently studying at IIITDM Jabalpur. I enjoy exploring new ideas, solving problems, and building things that make life easier or more exciting.</p>
              <p className='text-white m-3 p-4 hover:font-bold'>Whether it’s working on projects, taking part in competitions, or learning new skills, I believe in giving my best to everything I do. Outside of studies, I love collaborating with people, sharing ideas, and finding inspiration in everyday life.</p>

              <p className='text-white m-3 p-4 hover:font-bold'>I’m always eager to learn, grow, and take on challenges that push me to be better than I was yesterday.</p>
              
            </marquee>


        </div>

      </div>
      {/* <div className='flex flex-col items-center p-4 mt-0.5 ml-0.5 mr-0.5 mb-2 '>

        <p className='text-3xl text-amber-50 m-2 p-4'>About</p>
        <p className='text-xl text-white m-2 p-4'>Founded with a vision to make banking simple, secure, and accessible for everyone, <b>National bank</b> has been serving customers with dedication and innovation for years. We believe in combining traditional values of trust and integrity with modern technology to deliver a seamless financial experience.</p>

        <p className='text-xl text-white m-2 p-4'>Our services range from savings and current accounts, fixed deposits, and credit cards to loans, investment solutions, and digital banking facilities — ensuring that individuals, businesses, and communities have the financial tools they need to grow.</p>

        <p className='text-xl text-white m-2 p-4'>At the heart of our mission is customer satisfaction. Whether you visit us in person or connect through our digital platforms, we promise transparent processes, quick assistance, and personalized solutions tailored to your needs.</p>

        <p className='text-xl text-white m-2 p-4'>With a strong commitment to financial inclusion, we aim to empower every customer to achieve their dreams — one transaction at a time.</p>




      </div> */}
    </main>

    <Services />
      
    </div>
  )
}

export default App
