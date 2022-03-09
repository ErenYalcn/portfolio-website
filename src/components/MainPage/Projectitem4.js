import React from 'react'

export default function Projectitem4() {
  return (
    <div>
      <a href="https://github.com/ErenYalcn/portfolio-website">
      <div className='flex justify-between items-center group border-t py-2 px-8 sm:px-0'>
    <div className='flex items-center h-52'>
     <div className='hidden sm:block'> <div class="line2"></div></div>
      <div className='flex flex-col items-start'>
      <h4 className='text-4xl font-bold opacity-60 group-hover:opacity-100 transition-all'>Portfolyo Klon</h4>
      <p className='traci tracking-wider opacity-60 group-hover:opacity-100 transition-all'>Front-End Development</p>
      </div>
    </div>
    <div className='w-[480px] relative'>
      <a href="#" className='text-lg font-semibold py-4 transition-all flex items-center hover:scale-95 absolute z-30 sm:mt-[6rem] mt-[2rem] bg-cwhite min-w-max p-4 rounded-full shadow-2xl group-hover:invisible group-hover:-translate-x-6 transition duration-700 opacity-100 group-hover:opacity-0'>Projeyi incele <span class="line"></span>&gt;</a>
      <img className='w-[500px] right-0  shadow-xl top-0 z-20 relative invisible group-hover:visible transition-all transform group-hover:-translate-x-6 transition duration-700 opacity-0 group-hover:opacity-100' src="https://user-images.githubusercontent.com/57539683/157324861-11b6f3ac-f39e-41a5-bee4-0356d57330f3.png" />
      <div className='w-[440px] h-[260px] absolute bg-black blur-lg opacity-70 z-0 -ml-16 -mt-52 invisible group-hover:visible transition-all transform group-hover:-translate-x-6 transition duration-1000 opacity-0 group-hover:opacity-70 hidden sm:block'></div>
    </div>
    </div>
      </a>
</div>
  )
}
