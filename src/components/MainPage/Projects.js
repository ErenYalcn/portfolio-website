import React from 'react'

import {useEffect, useState} from 'react';
import { request } from 'graphql-request';
import Projectitem8 from './Projectitem8';


import { Fade } from "react-awesome-reveal";


export default function Projects() {

  const [projects, setProducts] = useState(null);

  console.log(projects);

  useEffect(() => {
    const fetchProducts = async () => {
      const { projects } = await request(
        'https://api-eu-central-1.graphcms.com/v2/cl05l1ghu1xwu01z22ef2azh6/master',
        `
      { 
        projects {
          id
          title
          description
          image {
            url
          }
          source
        }
      }
    `
      );
  
      setProducts(projects);
    };
  
    fetchProducts();
  }, []);


  return (
    <div className='mt-16 min-h-[235px] mb-16 overflow-x-hidden'>
      <div>
        {!projects ? ('load'):(
          <Fade triggerOnce delay={20} direction="up" >
          {projects.map(project => (
           <ul>
             <li key={project.id} >
             <Projectitem8 project={project} />
  
             </li>
           </ul>
        ))}
          </Fade>
        )}
        <div className='p-1 sm:p-16 group ml-6 sm:ml-12'>
          <p className='text-sm tracking-widest text-nonact'>FAZLASI VAR</p>
          <a href="https://erenyalcn.dev/projelerim">
          <h5 className='flex items-center gap-x-4 text-4xl py-4 group-hover:ml-4 transition-all font-bold'>Tüm projelere göz at<div class="line3"></div></h5>
          </a>
        </div>
      </div>
    </div>
  )
}
