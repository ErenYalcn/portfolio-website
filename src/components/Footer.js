import React from 'react'
import {BiWorld} from 'react-icons/bi'
import{AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className='bg-black text-white flex flex-col items-center p-12 !bottom-0 overflow-hidden'>


        <div className='flex flex-col items-center mt-4'>
            <h3 className='text-6xl font-bold'>Birlikte Çalışabiliriz</h3>
            <p className='text-nonact my-6 mt-10'>Sizin için freelance olarakta çalışabilirim.</p>
            <button className='text-2xl font-semibold border-[1px] border-nonact rounded-2xl p-3 px-6 my-1 hover:bg-cgray hover:border-cgray hover:scale-105 transition-all'>Bana ulaşabilirsiniz 👋🏻</button>
        </div>
        

        <div className='flex items-center gap-x-3 mt-20'>
            <span className='text-cwhite tracking-wider'>© 2022  Eren Yalçın</span>

            <div className='flex items-center gap-x-3'>
                <div href="#" className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <BiWorld />
                </div>

                <div href="#" className='text-[19px] hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <AiFillGithub />
                </div>

                <div href="#" className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <AiFillLinkedin />
                </div>
                
                <div href="#" className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <AiOutlineInstagram />
                </div>
                
                
            </div>


        </div>
        
    </footer>
    
  )
}
