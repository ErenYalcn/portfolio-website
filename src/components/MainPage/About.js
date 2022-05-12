import React from 'react'
import transparent from '../../Image/transparent.png'
import {ImDownload} from 'react-icons/im'

export default function About({isDarkMode}) {
  return (
    <div className='mt-16'>
      <div>
        <div className='flex-col md:flex-row flex justify-around p-2 px-8 sm:px-32 2xl:px-64 items-center'>
          <div className=' max-w-md'>
            <img className='sm:w-96 sm:h-96 w-80 h-80' src={transparent} />
          </div>
          <div className='left-0 relative'>
            <h3 className='text-4xl sm:text-8xl font-bold absolute opacity-20'>Hakkımda</h3>
            <p className='text-md mt-10 tracking-wider'>Web Front-End Developer</p>
            <h3 className='text-4xl font-bold '>merhaba, ben Eren Yalçın</h3>
            <p className='max-w-[460px]'>Web alanında Front-End geliştiriciliği yapmaktayım. HTML, CSS, JS ve React üzerine çalışmalar yapıp yenilikleri yakalamaya, kendimi yeniliklere adapte etmeye ve gelişime ayak uydurmaya çalışıyorum. Bir yandan e-ticaret siteleri hazırlayıp müşterilerime satışlarını yapmaktayım. Front-End için kullanacağım görsel ve videoları oluşturmak için ileri düzeyde Adobe Photoshop, Illustrator biliyorum.</p>
              <a href="https://drive.google.com/u/0/uc?id=1jx18GTDSSxoEPDxo0SxPwG1czbSMnRax&export=download" class={!isDarkMode ? "text-white bg-[#050708] hover:bg-[#050708]/90 outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 mt-4 transition-all" :"transition-all text-black bg-[#f6f6f6] hover:bg-[#050708]/90 outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 mt-4"}>
                <ImDownload className='mr-2' size={18} color={!isDarkMode ? "white": "black"}/>
              CV'mi indirebilirsiniz
            </a>


          </div>
        </div>
      </div>
    </div>
  )
}
