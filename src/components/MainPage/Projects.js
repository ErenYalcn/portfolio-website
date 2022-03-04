import React from 'react'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div className='mt-16 min-h-[235px] mb-16'>
      <div>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <div className='p-16 group ml-12'>
          <p className='text-sm tracking-widest text-nonact'>FAZLASI VAR</p>
          <a href="#">
          <h5 className='flex items-center gap-x-4 text-4xl py-4 group-hover:ml-4 transition-all font-bold'>Tüm projelere göz at<div class="line3"></div></h5>
          </a>
        </div>
      </div>
    </div>
  )
}
