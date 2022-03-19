import { Icon } from 'Icons'
import React from 'react'
import cesar from '../../Image/cesar.png'
import Typical from 'react-typical'


export default function HeroSection() {
  return (
    <div className=' top-0'>
      <div className='grid sm:flex justify-between p-2  px-8 sm:px-32 2xl:px-64  items-center'>
        <div className='z-20 order-2 md:order-1'>
          <h2 className='text-xl sm:text-5xl font-bold'><span className='text-6xl'>Eren Yalçın</span> <br /> 
            <div className='min-h-[40px]'>
            <Typical
            steps={['Front-End Developer', 1000, 'UI | UX Designer', 500,'Creative Ideas', 500]}
            loop={Infinity}
            wrapper="p"
          />
            </div>
          </h2>
          <p className='text-sm mt-6'>Merhaba ben Eren, güncel teknolojiler ile web geliştiriciliği yapıyorum,<br /> arayüzler tasarlamak ve herkesten farklı işler yapmak benim mottom.</p>
          <a href="https://erenyalcn.dev/projelerim" className='text-xl font-semibold rounded-2xl py-4 transition-all flex items-center hover:scale-95'>Projelerimi inceleyebilirsiniz <span class="line"></span>&gt;</a>
          <nav className='flex gap-x-4 mt-5 text-md'>
            <a href="https://www.linkedin.com/in/erenyalcn/" className='hover:line-through hover:scale-105 transition-all'>
            Linkedin
            </a>
            <span>/</span>
            <a href="https://github.com/ErenYalcn" className='hover:line-through hover:scale-105 transition-all'>
            Github
            </a>
            <span>/</span>
            <a href="https://ticaretdio.com" className='hover:line-through hover:scale-105 transition-all'>
            Ticaretdio
            </a>
          </nav>
        </div>
        <div className='hidden sm:block w-[450px] h-[450px] rounded-full absolute bg-white left-0 right-0 m-auto my-auto bg-opacity-60'></div>
       

        <div className='relative order-1 md:order-2'>
          <Icon name="cross" />
          <img className='w-[500px] h-auto animate-pulse' src={cesar} />
        </div>
      </div>
    </div>
  )
}
