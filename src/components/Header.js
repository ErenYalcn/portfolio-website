import React from 'react'
import { Icon } from 'Icons'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='text-black sticky top-0 z-50'>
        <div className='flex justify-between items-center px-[75px] bg-transparent'>
        <a href="http://localhost:3000" className='text-black'><Icon name="logo" size={100}/></a>
        <nav>
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
  )
}
