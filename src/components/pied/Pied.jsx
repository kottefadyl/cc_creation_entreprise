import React, { useRef } from 'react'
import { BsEnvelope, BsPhone, BsTelephone, BsZoomIn, BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import './pied.css'
import emailjs from '@emailjs/browser';

function Pied() {
    
    const form = useRef()
    const sendEmail =  (e) => { // Ajouter l'argument e
        
        e.preventDefault(); // Ajouter cette ligne
        alert("yo")
         emailjs.sendForm('service_qs3qgk3', 'template_1ua6ctp', form.current, 'iC_74LLXFkH3MuPxO')
           .then((result) => {
               alert(result.text);
           }, (error) => {
               alert(error.text);
          });
        console.log('nien');
        }

    return (

        <div className=' relative'>
            <div className='mt-60 '>

            </div>
            <div className=' flex md:block md:relative  mx-12  bottom-96  absolute -top-32 left-0 3xl:w-4/5 3xl:left-48 z-2'>
                <div className='sm:p-3 p-6 rounded-xl sm:w-full w-3/12 md:w-full'>
                    <div className=' rounded-xl p-8 w-45 max-w-45 text-center shadow-neutral-700 shadow-xl bg-neutral-50'>
                        <div className='flex justify-center'><BsEnvelope className='text-6xl font-extrabold text-blue-700' /></div>
                        <h1 className='text-neutral-800 font-bold text-lg mt-3'>Email</h1>
                        <p className='mt-3'>Stark-industrie@gmail.com <br />. </p>
                    </div>
                </div>
                <div className='sm:p-3 sm:w-full p-6 rounded w-3/12 md:w-full'>
                    <div className='rounded-xl p-8 w-45 max-w-45 text-center shadow-neutral-700 shadow-xl bg-neutral-50'>
                        <div className='flex justify-center'><BsPhone className='text-6xl font-extrabold text-blue-700' /></div>
                        <h1 className='text-neutral-800 font-bold text-lg mt-3'>Numero de telephone</h1>
                        <p className='mt-3'>+237 651 448 956 , +237 652 377 378 </p>
                    </div>
                </div>
                <div className='sm:p-3 sm:w-full p-6 rounded w-3/12 md:w-full'>
                    <div className='rounded-xl p-8 w-45 max-w-45 text-center shadow-neutral-700 shadow-xl bg-neutral-50'>
                        <div className='flex justify-center'><BsTelephone className='text-6xl font-extrabold text-blue-700' /></div>
                        <h1 className='text-neutral-800 font-bold text-lg mt-3'>Fax</h1>
                        <p className='mt-3'>+1-234-567-8900 <br />. </p>
                    </div>
                </div>
                <div className='sm:p-3 sm:w-full p-6 rounded w-3/12 md:w-full'>
                    <div className='rounded-xl p-8 w-45 max-w-45 text-center shadow-neutral-700 shadow-xl bg-neutral-50 '>
                        <div className='flex justify-center'><BsZoomIn className='text-6xl font-extrabold text-blue-700' /></div>
                        <h1 className='text-neutral-800 font-bold text-lg mt-3'>Bureau principale</h1>
                        <p className='mt-3'>yaoundé cameroun siantou coron ydé/cor-123</p>
                    </div>
                </div>
            </div>

            <div className='sm:block flex sm:p-5 p-14 pt-36 divDroite relative z-1 '>
                <div className='w-1/2 sm:w-full'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12 ">


                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                            Username
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex items-center border-b border-teal-500 py-2">

                                                <input
                                                    type="text"
                                                    name="to_name"
                                                    id="username"
                                                    autoComplete="username"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-neutral-300 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="janesmith"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-200">
                                            Email address
                                        </label>
                                        <div className="flex items-center border-b border-teal-500 py-2">

                                            <input
                                                type="text"
                                                name="from_name"
                                                id="username"
                                                autoComplete="username"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-neutral-300 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="addresseemail@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-neutral-200">
                                            description
                                        </label>
                                        <div className="flex items-center border-b border-teal-500 py-2">

                                            <input
                                                type="text"
                                                name="message"
                                                id="username"
                                                autoComplete="username"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-neutral-200 placeholder:text-neutral-300 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="small description"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-white">Write a few sentences about yourself.</p>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className="mt-6 flex  justify-center gap-x-6 text-center items-center">
                            <button 
                            type='button'
                                className="rounded-2xl bg-neutral-100  py-2 text-sm font-semibold text-rose-400 shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-20"
                            >
                                Soumettre
                            </button>
                        </div>
                    </form>
                </div>

                <div className=' w-1/2 text-neutral-100 sm:w-full'>
                    <div className='sm:p-1 p-14'>
                        <h1 className='font-bold text-3xl'>Contact Us</h1>
                        <h2 className='font-bold mt-6'>
                            we can assure you reliability, low prices and most importantly safety and comfort in mind
                        </h2>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis neque quas earum recusandae? Fugiat, praesentium? Pariatur quas consequuntur corporis totam doloribus quasi eligendi consectetur iusto, cupiditate illum officiis natus?</p>
                        <div className='mt-8'>
                            <ul className='text-2xl font-bold flex justify-between sm:pr-3 pr-56'>
                                <li><BsFacebook /></li>
                                <li><BsInstagram /></li>
                                <li><BsTwitter /></li>
                                <li><BsWhatsapp /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pied
