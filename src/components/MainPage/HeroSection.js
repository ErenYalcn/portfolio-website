import { Icon } from 'Icons'
import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <div className='flex justify-between p-2 px-32 text-black items-center'>
        <div>
          <h2 className='text-5xl font-bold'><span className='text-6xl'>Eren Yalçın</span> <br /> Front-End Web Developer</h2>
          <p className='text-sm mt-6'>Merhaba ben Eren, güncel teknolojiler ile web geliştiriciliği yapıyorum,<br /> arayüzler tasarlamak ve herkesten farklı işler yapmak benim mottom.</p>
          <a href="#" className='text-xl font-semibold rounded-2xl py-4 transition-all flex items-center hover:scale-95'>Projelerimi inceleyebilirsiniz <span class="line"></span> > </a>
        </div>
        <div className='relative'>
          <Icon name="cross" />
          <img className='w-[500px] h-auto animate-pulse' src="https://portfolio-behance-final.vercel.app/images/ceasar-bust.c2bf68cb3b24b5361c95d04c445511a8.png" />
        </div>
      </div>
    </div>
  )
}
