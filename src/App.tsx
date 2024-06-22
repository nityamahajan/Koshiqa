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
    <div className='bg-brown h-[58rem] w-screen max-sm:py-[32px] px-[24px] max-sm:h-[844px]'>
      <div className='w-full flex justify-center relative max-sm:mt-4'>
        <h1 className='font-anton text-yellow text-[15rem] font-medium leading-[24rem] tracking-tighter w-[1,240px] h-[394px] relative max-sm:text-[5rem] max-sm:h-[103px] max-sm:leading-0 max-sm:mt-[1rem] '>
          KOSHIQA
          <img src={JoinUs} alt="Join Us" className='absolute bottom-[20px] right-[202px] mt-[5rem] mr-[2rem] w-[10rem] h-[10rem] max-sm:bottom-0 max-sm:right-0 max-sm:mt-4 max-sm:mr-0 max-sm:static' />
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-8 p-[4rem] max-sm:grid-cols-1 max-sm:p-4 '>
        <div className='order-1 max-sm:order-3'>
          <h5 className='font-extrabold font-anton text-white text-3xl'>CONTACT US</h5>
          <p className='text-white mt-4'>help@koshiqa.com</p>
          <p className='text-white w-[25rem] mt-2 mb-2 max-sm:w-auto'>751, Malibu Town, Sector 47, Gurugram, Haryana 122018</p>
          <p className='text-white'>+91 9829024295</p>
        </div>
        <div className='order-2 text-yellow font-extrabold font-anton text-2xl ml-[6rem] flex flex-col justify-between max-sm:order-2 max-sm:ml-0 max-sm:mt-4'>
          <p>OUR TEAM</p>
          <p>DAILY JUICES</p>
          <p>FOR CORPORATES</p>
        </div>
        <div className='order-3 max-sm:order-1  max-sm:mt-4'>
          <div className='flex flex-row justify-between max-sm:flex-row max-sm:mt-[4rem] '>
            <img src={Googleplay} alt="GooglePlay" className='w-[182.41px] h-[54.34px] mr-3 max-sm:mr-3 max-sm:mb-2 max-sm:h-[46px] max-sm:w-[155px] ' />
            <img src={AppStore} alt="AppStore" className='w-[182.41px] h-[54.34px] max-sm:h-[46px] max-sm:w-[155px]' />
          </div>
          <div className='flex flex-row justify-between mt-4 max-sm:hidden ml-[10rem]'>
            <img src={Insta} alt="Instagram" className='w-[40px] h-[40px] mx-2' />
            <img src={Twitter} alt="Twitter" className='w-[40px] h-[40px] mx-2' />
            <img src={Linkedin} alt="LinkedIn" className='w-[40px] h-[40px] mx-2' />
            <img src={Facebook} alt="Facebook" className='w-[40px] h-[40px] mx-2' />
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-4 lg:hidden max-sm:mt-6 max-sm:justify-start max-sm:mb-4 max-sm:ml-2'> 
        <img src={Insta} alt="Instagram" className='w-[40px] h-[40px] mx-2' />
        <img src={Twitter} alt="Twitter" className='w-[40px] h-[40px] mx-2' />
        <img src={Linkedin} alt="LinkedIn" className='w-[40px] h-[40px] mx-2' />
        <img src={Facebook} alt="Facebook" className='w-[40px] h-[40px] mx-2' />
      </div>
      <div>
        <hr className='horizontal-line mx-[4rem] max-sm:mx-[24px]' />
        <p className='text-[16px] text-white ml-[4rem] mt-[2rem] max-sm:ml-4 text-left max-sm:text-left'>© 2024, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default App
