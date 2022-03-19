import React from 'react'
import transparent from '../../Image/transparent.png'


export default function Hakkimda() {
  return (
    <div className='sm:mt-16 mb-8'>
    <div>
      <div className='sm:flex justify-around p-2 px-8 sm:px-32 2xl:px-64 items-center'>
      <div className='left-0 relative'>
          <h3 className='text-6xl sm:text-8xl font-bold absolute opacity-20'>Hakkımda</h3>
          <p className='text-md mt-10 tracking-wider'>Web Front-End Developer</p>
          <h3 className='text-2xl tracking-widest font-thin max-w-[500px]'>Web Front-End geliştiriciliği yapmaktayım. HTML, CSS, JS ve React üzerine çalışmalar yapıp yenilikleri yakalamaya, kendimi yeniliklere adapte etmeye ve gelişime ayak uydurmaya çalışıyorum.</h3>
        </div>
        <div className='flex order-1'>
          <img className='sm:w-96 sm:h-96 w-80 h-80' src={transparent} />
        </div>

      </div>
      <div className='max-w-[1050px] flex items-center mx-auto'>
        <p className='tracking-wide	font-thin leading-8 px-8'>Web alanında Front-End geliştiriciliği yapmaktayım. HTML, CSS, JS ve React üzerine çalışmalar yapıp yenilikleri yakalamaya, kendimi yeniliklere adapte etmeye ve gelişime ayak uydurmaya çalışıyorum. Bir yandan e-ticaret siteleri hazırlayıp müşterilerime satışlarını yapmaktayım. Front-End için kullanacağım görsel ve videoları oluşturmak için ileri düzeyde Adobe Photoshop, Illustrator biliyorum. Öte yandan After Effect ve Premiere yazılımlarında da kendimi sürekli geliştirmeye çalışıyorum. Özgün olmak, herkesten farklı işler yapmak, kısacası tarz sahibi işler yapmaya çalışıyorum. Sektör olarakta ilgimi en çok çeken E-Ticaret olmuştur. Her şey bir kahve ile başlar</p>
      </div>

      

    </div>
  </div>
  )
}
