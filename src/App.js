import Content from "components/Content";
import Footer from "components/Footer"
import { Icon } from 'Icons'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, {useState} from 'react';
import {Sugar} from 'react-preloaders2';
import Header from "components/Header";

import { DarkModeSwitch } from 'react-toggle-dark-mode';




function App() {
 



  const [isDarkMode, setDarkMode] = useState(() => false);
    
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
            
  return (
    
    <div className={!isDarkMode ? 'App bg-cwhite' : 'App bg-[#040404] !text-white'}>


    <Router>
      <Switch>
      <div className='text-black sticky top-0 z-50'>
  

        <Header isDarkMode={isDarkMode}/>

        
    </div>


   
      </Switch>
        <Content  isDarkMode={isDarkMode}/>
        <Footer />
        <div className="relative pointer-events-none">
        <Icon name="dot" size={180}/>
        <Icon name="circletwo" size={300}/>
        </div>
        <div className="z-[999]  fixed bottom-4 right-8">

        <DarkModeSwitch
        style={{ marginBottom: '0.9rem'}}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={35}
        />
        

        </div>
    </Router>
    <Sugar color="white" background="black" animation="slide-left" />
  </div>
  

  );
  
}
export default App;


