import React, {useRef} from 'react'
import particles from '../../Image/particles.mp4'
import {BiWorld} from 'react-icons/bi'
import{AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import { Fade } from "react-awesome-reveal";
import {Helmet} from "react-helmet";


export default function Contact() {

   
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d2pttbr', 'template_pm8qpnk', form.current, 'U61fIfVEfL1-C7URP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    

  return (


    <div className='relative w-full h-full'>
                  <Helmet>
                <meta charSet="utf-8" />
                <title>İletişim | Eren Yalçın</title>
            </Helmet>
      <video loop autoPlay webkit-playsinline webkit-playsInline playsInline muted src={particles} className='pointer-events-none	absolute z-10 w-[100%] h-[100%] sm:w-full sm:h-full object-cover sm:min-w-max' />

          <div class="z-30 relative max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 bg">
            <div class="flex flex-col">
            <Fade triggerOnce direction="up" delay={1000} >

              <div className='mt-16'>
                <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-cwhite stroke-2 stroke-white">İrtibata geçelim!</h2>
                <div class="text-cwhite mt-8">
                  Formları sevmiyor musunuz? <a href="mailto:erenyalcn09@gmail.com" class="underline">eposta</a> gönderin.
                  <h2 class="text-2xl mt-2 font-bold leading-tight text-cwhite stroke-2 stroke-white">Farklı, yaratıcı işler ortaya çıkarmak istiyorsanız.</h2>
                </div>         
              </div>
              </Fade>
              
              <div class="mt-20 -ml-16">
                <div className=' sm:flex items-center justify-between px-16'>
                    <div className='text-cwhite flex flex-col'>
                    <Fade triggerOnce direction="up" delay={1700} >

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
                    </Fade>
                    </div>
                    <div className='text-cwhite flex flex-col'>
                    <Fade triggerOnce direction="up" delay={2000} >

                    <h5>Telefon.</h5>
                    <a href="tel://+905419691945" className='mt-4 text-cwhite'>+90 541 969 1945</a>
                    </Fade>
                  </div>
                  </div>

                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <span class="uppercase text-sm text-[#ffffff5e] font-bold">İSMİNİZ</span>
                <input class="w-full bg-inputg text-cwhite mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" name="user_name"  placeholder="" />
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-[#ffffff5e] font-bold">E-Posta</span>
                <input class="w-full bg-inputg text-cwhite mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email" name="user_email" />
              </div>
              <div class="mt-8">
                <span class="uppercase text-sm text-[#ffffff5e] font-bold">Mesajınız</span>
                <textarea
                  class="w-full h-32 bg-inputg text-cwhite mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message"></textarea>
              </div>
              <div class="mt-8">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-inputgg hover:bg-inputg transition-all text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type="submit" value="Send">
                  Gönder
                </button>
              </div>
            </form>
          </div>
      </div>
    
  )
}

