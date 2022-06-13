import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1D1C1E] text-white pt-20 pb-20'>
      <div className='flex flex-col sm:flex-row justify-between sm:w-3/4 m-auto pb-10 border-b-2 border-b-slate-600'>
        
      </div>

      <div className='flex flex-col sm:flex-row text-center justify-between w-3/4 m-auto  mt-10'>
        <div className='w-3/4 sm:w-1/6 sm:text-left my-3 m-auto'>
          <h1>Designo Central Office</h1>
          <p>123X, lorem ipsum, India</p>
        </div>
        <div className='w-3/4 sm:w-fit sm:text-left my-6 sm:my-3 m-auto'>
          <h1>Contact Us</h1>
          <p>P: +1 123-456-7890</p>
          <p>M: contact@designo.com</p>
        </div>
        <div className='flex w-3/4 sm:w-1/3 sm:text-left justify-center my-3 m-auto'>
          <a className='m-auto mx-2' href=""><img src="/images/icon-facebook.svg" alt="Facebook" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-youtube.svg" alt="Youtube" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-pinterest.svg" alt="Pinterest" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer