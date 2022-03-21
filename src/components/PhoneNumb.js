import { useState } from "react";
import ReactFlagsSelect from 'react-flags-select';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function PhoneNumb() {

    const [selected, setSelected] = useState('TR');

    <ReactFlagsSelect
      selected={selected}
      onSelect={code => setSelected(code)}
    />
    const phonenumber ={
        TR: '+90',
        DE: '+45',
        US: '+1',
        RU: '+20',
        FR: '+6'
    }


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d2pttbr', 'template_boxyd3c', form.current, 'U61fIfVEfL1-C7URP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className="w-full md:w-[400px] md:rounded-lg p-6 sm:bg-black md:mx-auto !z-50">
    <h4 className="text-primary-brand-color font-semibold text-center mb-2"> ya da ben size ulaşabilirim</h4>
    <div className="flex gap-x-2">
    <ReactFlagsSelect 
     countries={Object.keys(phonenumber)}
     customLabels={phonenumber}
     selected={selected} 
     onSelect={code => setSelected(code)}
     className="flag-s text-nonact bg-white rounded-md !border-none !border-0"
     />
     <label className="flex-1 relative block text-black">
         <input name="message" required className="h-12 px-4 border-2 transition-colors text-sm pt-2 outline-none border-gray-200 rounded w-full hover:border-nonact focus:!border-nonact peer"></input>
         <span className="absolute top-0 left-0 px-4 h-full flex items-center text-sm text-nonact transition-all peer-focus:h-7 peer-focus:text-nonact peer-focus:text-xs peer-valid:text-nonact peer-valid:text-xs peer-valid:h-7">Telefon Numarası</span>
     </label>
    </div>
    <button type="submit" value="Send" className="hover:bg-cgray border-[1px] border-nonact rounded-2xlbg-brand-yellow text-primary-brand-color transition-colors w-full h-12 mt-4 rounded-lg text-sm font-semibold hover:bg-primary-brand-color hover:text-brand-yellow">
    Telefon numarası ile devam et
    </button>
</div>
</form>
  )
}
