import { Icon } from 'Icons'
import React from 'react'
import cesar from '../../Image/cesar.png'

export default function HeroSection() {
  return (
    <div className='bg-cwhite top-0'>
      <div className='flex justify-between p-2 px-32 2xl:px-64 text-black items-center'>
        <div className='z-20'>
          <h2 className='text-5xl font-bold'><span className='text-6xl'>Eren Yalçın</span> <br /> Front-End Web Developer</h2>
          <p className='text-sm mt-6'>Merhaba ben Eren, güncel teknolojiler ile web geliştiriciliği yapıyorum,<br /> arayüzler tasarlamak ve herkesten farklı işler yapmak benim mottom.</p>
          <a href="#" className='text-xl font-semibold rounded-2xl py-4 transition-all flex items-center hover:scale-95'>Projelerimi inceleyebilirsiniz <span class="line"></span>&gt;</a>
          <nav className='flex gap-x-4 mt-5 text-md'>
            <a href="#" className='hover:line-through hover:scale-105 transition-all'>
            Linkedin
            </a>
            <span>/</span>
            <a href="#" className='hover:line-through hover:scale-105 transition-all'>
            Github
            </a>
            <span>/</span>
            <a href="#" className='hover:line-through hover:scale-105 transition-all'>
            Ticaretdio
            </a>
          </nav>
        </div>
        <div className='w-[450px] h-[450px] rounded-full absolute bg-white left-0 right-0 m-auto my-auto bg-opacity-60'></div>
       

        <div className='relative'>
          <Icon name="cross" />
          <img className='w-[500px] h-auto animate-pulse' src={cesar} />
        </div>
      </div>
    </div>
  )
}
