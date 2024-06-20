import React from 'react'
import AppStore from './assets/AppStore.svg'
import Googleplay from './assets/Googleplay.svg'
import Insta from './assets/Insta.svg'
import Twitter from './assets/Twitter.svg'
import Linkedin from './assets/LinkedIn.svg'
import Facebook from './assets/Facebook.svg'
import JoinUs from './assets/JoinUs.svg'

const App: React.FC = () => {
  return (
    <div className='bg-brown h-[58rem] w-screen'>
      <div className='w-full flex justify-center relative'>
        <h1 className='font-anton text-yellow text-[15rem] font-medium leading-[24rem] tracking-tighter w-[1,240px] h-[394px] relative'>
          KOSHIQA
          <img src={JoinUs} alt="Join Us" className='absolute bottom-[20px] right-[202px] mt-[5rem] mr-[2rem] w-[10rem] h-[10rem]' />
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-8 p-[4rem]'>
        <div>
          <h5 className='font-extrabold font-anton text-white text-3xl'>CONTACT US</h5>
          <p className='text-white mt-4'>help@koshiqa.com</p>
          <p className='text-white w-[25rem] mt-2 mb-2'>751, Malibu Town, Sector 47, Gurugram, Haryana 122018</p>
          <p className='text-white'>+91 9829024295</p>
        </div>
        <div className='text-yellow font-extrabold font-anton text-2xl ml-[4rem] flex flex-col justify-between'>
          <p>OUR TEAM</p>
          <p>DAILY JUICES</p>
          <p>FOR CORPORATES</p>
        </div>
        <div>
          <div className='flex flex-row '>
            <img src={Googleplay} alt="GooglePlay" className='w-[182.41px] h-[54.34px] mr-3' />
            <img src={AppStore} alt="AppStore" className='w-[182.41px] h-[54.34px]' />
          </div>
          <div className='flex flex-row w-[13rem] justify-between mt-4 ml-[10rem]'>
            <img src={Insta} alt="Instagram" className='w-[40px] h-[40px]' />
            <img src={Twitter} alt="Twitter" className='w-[40px] h-[40px]' />
            <img src={Linkedin} alt="LinkedIn" className='w-[40px] h-[40px]' />
            <img src={Facebook} alt="Facebook" className='w-[40px] h-[40px]' />
          </div>
        </div>
      </div>
      <div>
        <hr className='horizontal-line mx-[4rem]'></hr>
        <p className='text-[16px] text-white ml-[4rem] mt-[2rem]'>© 2024, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App
