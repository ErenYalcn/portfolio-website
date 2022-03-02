import React from 'react'
import { Icon } from 'Icons'

export default function Header() {
  return (
    <div className='text-black bg-[#dedede] sticky top-0 z-10'>
        <div className='flex justify-between items-center px-[75px]'>
        <span className='text-black'><Icon name="logo" size={100}/></span>
        <nav>
            <ul className='flex gap-x-4 font-semibold text-nonact'>
                <li className='hover:text-black transition-all'>
                    Hakkımda
                </li>
                <li className='hover:text-black transition-all'>
                    İşlerim
                </li>
                <li className='hover:text-black transition-all'>
                    İletişim
                </li>
            </ul>
        </nav>
        </div>
    </div>
  )
}
