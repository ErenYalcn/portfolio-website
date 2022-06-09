import { Icon } from 'Icons';
import React from 'react';
import {Helmet} from "react-helmet";


const Skills = () => {
    return (
        
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hakkımda | Eren Yalçın</title>
            </Helmet>
            <div class="container mx-auto pt-16">
                    <div class="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                       
                    </div>
                    <div class="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                           <Icon name="html" size={80}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                            <Icon name="css" size={80}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                        <Icon name="tw" size={80}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                        <Icon name="js" size={70}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                        <Icon name="boot" size={70}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                        <Icon name="sass" size={80}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-[1.5rem] md:pt-2 pt-16">
                        <Icon name="wordpress" size={60}/>
                        </div>
                        <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-[1.5rem] md:pt-2 pt-16">
                        <Icon name="reactI" size={65}/>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default Skills;
