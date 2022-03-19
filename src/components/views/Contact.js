import React from 'react'
import particles from '../../Image/particles.mp4'
import {BiWorld} from 'react-icons/bi'
import{AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
export default function Contact() {
  return (


    <div className='relative w-full h-full'>
      <video loop autoPlay muted src={particles} className='absolute z-10 w-full h-full object-cover min-w-max' />

          <div class="z-30 relative max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 bg">
            <div class="flex flex-col">
              <div className='mt-16'>
                <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-cwhite stroke-2 stroke-white">İrtibata geçelim!</h2>
                <div class="text-cwhite mt-8">
                  Formları sevmiyor musunuz? <a href="mailto:erenyalcn09@gmail.com" class="underline">eposta</a> gönderin.
                  <h2 class="text-2xl mt-2 font-bold leading-tight text-cwhite stroke-2 stroke-white">Farklı, yaratıcı işler ortaya çıkarmak istiyorsanız.</h2>
                </div>         
              </div>
              <div class="mt-20 -ml-16">
                <div className=' sm:flex items-center justify-between px-16'>
                    <div className='text-cwhite flex flex-col'>
                      <h5>Sosyal Medya.</h5>
                      <div className='flex items-center gap-x-3 mt-4'>
                <div className='text-xl hover:bg-cwhite text-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                   <a href="https://erenyalcn.dev/">
                   <BiWorld />
                   </a>
                </div>

                <div  className='text-[19px] hover:bg-cwhite text-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://github.com/ErenYalcn">
                    <AiFillGithub />
                    </a>
                </div>

                <div  className='text-xl hover:bg-cwhite text-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://www.linkedin.com/in/erenyalcn/">
                    <AiFillLinkedin />
                    </a>
                </div>
                
                <div  className='text-xl hover:bg-cwhite text-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://www.instagram.com/erenyalccn">
                    <AiOutlineInstagram />
                    </a>
                </div>
                
                
            </div>
                    </div>
                    <div className='text-cwhite flex flex-col'>
                    <h5>Telefon.</h5>
                    <a href="tel://+905419691945" className='mt-4 text-cwhite'>+90 541 969 1945</a>
                  </div>
                  </div>

                </div>
            </div>
            <div class="">
              <div>
                <span class="uppercase text-sm text-[#ffffff5e] font-bold">İSMİNİZ</span>
                <input class="w-full bg-inputg text-cwhite mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="" />
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-[#ffffff5e] font-bold">E-Posta</span>
                <input class="w-full bg-inputg text-cwhite mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" />
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-[#ffffff5e] font-bold">Mesajınız</span>
                <textarea
                  class="w-full h-32 bg-inputg text-cwhite mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div class="mt-8">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-inputgg hover:bg-inputg transition-all text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Gönder
                </button>
              </div>
            </div>
          </div>
      </div>
    
  )
}
