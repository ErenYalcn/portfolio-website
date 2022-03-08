import React from 'react'
import transparent from '../../Image/transparent.png'

export default function About() {
  return (
    <div className='mt-16'>
      <div>
        <div className='flex-col sm:flex-row flex justify-around p-2 px-8 sm:px-32 2xl:px-64 items-center'>
          <div className=' max-w-md'>
            <img className='w-96 h-96' src={transparent} />
          </div>
          <div className='left-0 relative'>
            <h3 className='text-4xl sm:text-8xl font-bold absolute opacity-20'>Hakkımda</h3>
            <p className='text-md mt-10 tracking-wider'>Web Front-End Developer</p>
            <h3 className='text-4xl font-bold '>merhaba, ben Eren Yalçın</h3>
            <p className='max-w-[460px]'>Web alanında hem Front-End geliştiriciliği yapmaktayım. Web alanı için HTML, CSS, JS ve React üzerine çalışmalar yapıp yenilikleri yakalamaya, kendimi yeniliklere adapte etmeye ve gelişime ayak uydurmaya çalışıyorum. Bir yandan e-ticaret siteleri hazırlayıp müşterilerime satışlarını yapmaktayım. Front-End için kullanacağım görsel ve videoları oluşturmak için ileri düzeyde Adobe Photoshop, Illustrator biliyorum. Öte yandan After Effect ve Premiere yazılımlarında da kendimi sürekli geliştirmeye çalışıyorum. Özgün olmak, herkesten farklı işler yapmak, kısacası tarz sahibi işler yapmaya çalışıyorum. Sektör olarakta ilgimi en çok çeken E-Ticaret olmuştur.<br />Her şey bir kahve ile başlar ☕</p>
          </div>
        </div>
      </div>
    </div>
  )
}
