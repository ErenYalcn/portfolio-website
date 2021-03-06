import React from 'react'


export default function Projectitem8({project}) {
  return (
      
    <div>
      <a target="_blank" href={project.source}>
      <div className='flex justify-between items-center group border-t py-2 px-8 sm:px-0'>
    <div className='flex items-center h-52'>
     <div className='hidden sm:block'> <div class="line2"></div></div>
      <div className='flex flex-col items-start'>
      <h4 className='text-2xl sm:text-4xl font-bold opacity-60 group-hover:opacity-100 transition-all max-w-[80px] sm:max-w-none'>{project.title}</h4>
      <p className='text-xs sm:text-sm tracking-wider opacity-60 group-hover:opacity-100 transition-all'>Front-End Development</p>
      </div>
    </div>
    <div className='w-[480px] relative'>
      <a href="https://github.com/ErenYalcn/spend-acuns-money" className='text-black text-lg font-semibold py-4 transition-all sm:flex items-center hidden hover:scale-95 absolute z-30 sm:mt-[6rem] mt-[2rem] bg-cwhite min-w-max p-4 rounded-full shadow-2xl group-hover:invisible group-hover:-translate-x-6 transition duration-700 opacity-100 group-hover:opacity-0'>Projeyi incele <span class="line"></span>&gt;</a>
      <img className='w-[500px] right-[-180px] sm:right-0  shadow-xl top-[1.1rem] sm:top-0 z-20 fixed sm:relative sm:invisible sm:group-hover:visible transition-all transform sm:group-hover:-translate-x-6 transition duration-700 sm:opacity-0 group-hover:opacity-100' src={project.image.url} />
      <div className='w-[440px] h-[260px] absolute bg-black blur-lg opacity-70 z-0 -ml-16 -mt-52 invisible group-hover:visible transition-all transform group-hover:-translate-x-6 transition duration-1000 opacity-0 group-hover:opacity-70 hidden sm:block'></div>
    </div>
    </div>
      </a>
</div>
  )
}
