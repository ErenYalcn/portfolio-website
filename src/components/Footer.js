import React from 'react'
import {BiWorld} from 'react-icons/bi'
import{AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import PhoneNumb from './PhoneNumb';
import {useState, useEffect} from 'react'


export default function Footer() {

    const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }




  return (
    <footer className='bg-black text-white flex flex-col items-center p-12 !bottom-0 overflow-hidden'>


        <div className='flex flex-col items-center mt-4 pt-5'>
            <h3 className='text-6xl font-bold'>Birlikte Çalışabiliriz</h3>
            <p className='text-nonact my-6 mt-10'>Sizin için freelance olarakta çalışabilirim.</p>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=905419691945&text=Merhaba%20Eren%20%F0%9F%91%8B,%20siteniz%20%C3%BCzerinden%20size%20ula%C5%9Ft%C4%B1m.%20Birlikte%20%C3%A7al%C4%B1%C5%9Fmak%20isteriz." className='text-2xl font-semibold border-[1px] border-nonact rounded-2xl p-3 px-6 my-1 hover:bg-cgray hover:border-cgray hover:scale-105 transition-all'>Bana ulaşabilirsiniz 👋🏻</a>
                <PhoneNumb />
                <button onClick={onClick} className="hover:bg-cgray border-[1px] border-nonact rounded-2xlbg-brand-yellow text-primary-brand-color transition-colors h-12 mt-0 rounded-lg text-sm font-semibold hover:bg-primary-brand-color hover:text-brand-yellow w-[266px] md:w-[352px] ">Uygulamayı Yükle</button>

        </div>
        


        <div className='flex items-center gap-x-3 mt-20 '>
            <span className='text-cwhite tracking-widest whitespace-nowrap'>© 2022  Eren Yalçın</span>

            <div className='flex items-center gap-x-3'>
                <div className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                   <a href="https://erenyalcn.dev/">
                   <BiWorld />
                   </a>
                </div>

                <div  className='text-[19px] hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://github.com/ErenYalcn">
                    <AiFillGithub />
                    </a>
                </div>

                <div  className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://www.linkedin.com/in/erenyalcn/">
                    <AiFillLinkedin />
                    </a>
                </div>
                
                <div  className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://www.instagram.com/erenyalccn">
                    <AiOutlineInstagram />
                    </a>
                </div>
                
                
            </div>


        </div>
  

    </footer>
    
  )
}
