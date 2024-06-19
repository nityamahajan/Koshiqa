import React from 'react'
import AppStore from './assets/AppStore.svg'
import Googleplay from './assets/Googleplay.svg'
import Insta from './assets/Insta.svg'
import Twitter from './assets/Twitter.svg'
import Linkedin from './assets/LinkedIn.svg'
import Facebook from './assets/Facebook.svg'


 const App:React.FC=()=>{
  
  return (
    <div className='bg-brown h-[58rem] w-screen'>
      <div className='w-full flex justify-center'>
        <h1 className='font-anton text-yellow text-[15rem] font-medium leading-[24rem] tracking-tighter w-[1,240px] h-[394px] '>KOSHIQA</h1>

      </div>
      <div className='grid grid-cols-3 gap-8'>

        <div>
           <h5 className='font-bold font-anton text-white text-3xl'>CONTACT US</h5>
           <p className='text-white mt-2'>help@koshiqa.com</p>
           <p className='text-white'>751, Malibu Town, Sector 47, Gurugram, Haryana 122018</p>
           <p className='text-white'>+91 9829024295</p>

        </div>
        <div className='text-yellow font-bold font-anton text-2xl '>
          <p>OUR TEAM</p>
          <p>DAILY JUICES</p>
          <p>FOR CORPORATES</p>
        </div>
        <div>
          <div className='flex flex-row '>
            <img src= {AppStore} alt="AppStore" className='w-[182.41px] h-[54.34px] mr-3' ></img>
            <img src={Googleplay} alt="GooglePlay" className='w-[182.41px] h-[54.34px]'/>


          </div>
          <div className='flex flex-row w-[13rem] justify-between mt-4'>
            <img src={Insta} alt="Instagram" className='w-[40px] h-[40px]'/>
            <img src={Twitter} alt="Twitter" className='w-[40px] h-[40px]'/>
            <img src={Linkedin} alt="LinkedIn" className='w-[40px] h-[40px]'/>
            <img src={Facebook} alt="Facebook" className='w-[40px] h-[40px]'/>




          </div>
        </div>
      </div>
    </div>

  )
}

export default App
