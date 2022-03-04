import React from 'react'

export default function ProjectItem() {
  return (
    <div>
        <div className='flex justify-between items-center group border-t py-2'>
        <div className='flex items-center h-52'>
          <div class="line2"></div>
          <span className='text-4xl mr-8 opacity-60 group-hover:opacity-100 transition-all'>01</span>
          <div className='flex flex-col items-start'>
          <h4 className='text-4xl font-bold opacity-60 group-hover:opacity-100 transition-all'>Spotify Klon</h4>
          <p className='traci tracking-wider opacity-60 group-hover:opacity-100 transition-all'>Front-End Development</p>
          </div>
        </div>
        <div className='w-[480px] relative'>
          <a href="#" className='text-lg font-semibold py-4 transition-all flex items-center hover:scale-95 absolute z-30 mt-[6rem] bg-cwhite min-w-max p-4 rounded-full shadow-2xl group-hover:invisible group-hover:-translate-x-6 transition duration-700 opacity-100 group-hover:opacity-0'>Projeyi incele <span class="line"></span>&gt;</a>
          <img className='w-[500px] right-0  shadow-xl top-0 z-20 relative invisible group-hover:visible transition-all transform group-hover:-translate-x-6 transition duration-700 opacity-0 group-hover:opacity-100' src="https://user-images.githubusercontent.com/57539683/152556644-f57295ee-3f3d-4c83-956c-cfcbe3c763a6.png" />
          <div className='w-[440px] h-[260px] absolute bg-black blur-lg opacity-70 z-0 -ml-16 -mt-52 invisible group-hover:visible transition-all transform group-hover:-translate-x-6 transition duration-1000 opacity-0 group-hover:opacity-70'></div>
        </div>
        </div>
    </div>
  )
}