import Content from "components/Content";
import Footer from "components/Footer"
import { Icon } from 'Icons'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Sugar} from 'react-preloaders2';
import DarkModeToggle from "react-dark-mode-toggle";


//header
import { NavLink } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import {BiWorld} from 'react-icons/bi'
import{AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'





function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
    




  const [isOpen, setOpen] = useState(false)
    

    let menu
    if(isOpen){
        
        menu =     
        <div className={!isDarkMode ?'bg-cwhite min-w-full min-h-full fixed z-50 overflow-y-hidden': 'bg-black text-white min-w-full min-h-full fixed z-50 overflow-y-hidden'}>
            <nav className='mt-[10rem]'>
                <ul className='flex flex-col gap-x-4 font-bold  text-[2.3rem] gap-y-7 items-center'>
                    <li className='hover:text-black transition-all '>
                        <NavLink to={"/"} exact activeClassName="line-through transition-all" >
                        Anasayfa
                        </NavLink>
                    </li>
                    <li className='hover:text-black transition-all'>
                        <NavLink to={"/hakkimda"} activeClassName="line-through transition-all" >
                        Hakkımda
                        </NavLink>
                    </li>
                    <li className='hover:text-black transition-all'>
                    <NavLink to={"/projelerim"} activeClassName="line-through transition-all" >
                        Projelerim
                    </NavLink>
                    </li>
                    <li className='hover:text-black transition-all'>
                    <NavLink to={"/iletisim"} activeClassName="line-through transition-all" >
                        İletişim
                    </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='bottom-0 absolute left-[50%] -ml-[90px] mb-8'>
            <div className='flex items-center gap-x-3'>
                <div className='text-2xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                   <a href="https://erenyalcn.dev/">
                   <BiWorld />
                   </a>
                </div>

                <div  className='text-2xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://github.com/ErenYalcn">
                    <AiFillGithub />
                    </a>
                </div>

                <div  className='text-2xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://www.linkedin.com/in/erenyalcn/">
                    <AiFillLinkedin />
                    </a>
                </div>
                
                <div  className='text-2xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
                    <a href="https://www.instagram.com/erenyalccn">
                    <AiOutlineInstagram />
                    </a>
                </div>
                
                
            </div>
                
                </div>
        </div>
    
    }
            let location = window.location
            let lastUrl = location.href; 
            new MutationObserver(() => {
            const url = location.href;
            if (url !== lastUrl) {
                lastUrl = url;
                onUrlChange();
            }
            }).observe(document, {subtree: true, childList: true});
            
            
            function onUrlChange() {
            if(isOpen){
                setOpen(false)
                document.body.classList.remove("stop-scrolling");
                //location.reload();
                
                
            }
            }

            if(isOpen == true){
                document.body.classList.add("stop-scrolling");

                
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth' 
             }); 
            }else{
                document.body.classList.remove("stop-scrolling");
            }



          



            
            
            
            
  return (
    
    <div className={!isDarkMode ? 'App bg-cwhite' : 'App bg-[#0f0f0f] !text-white'}>

    <Router>
      <Switch>
      <div className='text-black sticky top-0 z-50'>
        <div>
  
        </div>

        {menu}
        <div className='flex justify-between items-center px-8 sm:px-[75px] bg-transparent'>
        <a href="https://erenyalcn.dev" className='text-black z-50'>{!isDarkMode  ? <Icon name="logo" size={100}  /> : <Icon name="logow" size={100} />}</a>
        <div className='block sm:hidden z-50'>
        <Hamburger color={!isDarkMode ? "black" : "white"} toggled={isOpen} toggle={setOpen} />
            
            


                
            </div>
        

        <nav className='hidden sm:block'>
            <ul className='flex gap-x-4 font-semibold text-nonact'>
                <li className='hover:text-black transition-all'>
                    <NavLink to={"/"} exact activeClassName="line-through transition-all" >
                    Anasayfa
                    </NavLink>
                </li>
                <li className='hover:text-black transition-all'>
                    <NavLink to={"/hakkimda"} activeClassName="line-through transition-all" >
                    Hakkımda
                    </NavLink>
                </li>
                <li className='hover:text-black transition-all'>
                <NavLink to={"/projelerim"} activeClassName="line-through transition-all" >
                    Projelerim
                </NavLink>
                </li>
                <li className='hover:text-black transition-all'>
                <NavLink to={"/iletisim"} activeClassName="line-through transition-all" >
                    İletişim
                </NavLink>
                </li>
            </ul>
        </nav>
        </div>
        
    </div>
      </Switch>
        <Content />
        <Footer />
        <div className="relative pointer-events-none">
        <Icon name="dot" size={180}/>
        <Icon name="circletwo" size={300}/>
        </div>
        <div className="z-[999]  fixed bottom-4 right-4 rotate-90">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
          
        />
        

        </div>
    </Router>
    <Sugar color="white" background="black" animation="slide-left" />
  </div>
  

  );
  
}
export default App;


