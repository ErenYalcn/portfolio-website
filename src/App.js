import Content from "components/Content";
import Footer from "components/Footer"
import { Icon } from 'Icons'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, {useState} from 'react';
import {Sugar} from 'react-preloaders2';
import DarkModeToggle from "react-dark-mode-toggle";
import Header from "components/Header";





function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
    
       
            
  return (
    
    <div className={!isDarkMode ? 'App bg-cwhite' : 'App bg-[#0f0f0f] !text-white'}>

    <Router>
      <Switch>
      <div className='text-black sticky top-0 z-50'>
  

        <Header  isDarkMode={isDarkMode}/>

        
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


