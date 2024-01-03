import Cardlivre from '../cardlivre/cardlivre'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './part1.css'
import { BsBook } from "react-icons/bs";
export default function Part1() {

    const [catalogue, setCatalogue] = useState([]);


    useEffect(() => {
        // Effectuer une requête GET pour récupérer les todos depuis votre API
        axios.get('http://192.168.115.38:8000/api/Catalogue/')  // Remplacez l'URL par l'URL de votre API
          .then(response => {
            setCatalogue(response.data);  // Mettre à jour l'état avec les todos récupérés depuis l'API
            console.log(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des catalogues :', error);
        });
      
    }, [])

    return (
        <div className='sm:mx-1 md:mx-6  mx-40'>
            <nav className="mt-6 relative flex w-full flex-wrap items-center justify-between bg-[#686363] py-2 text-neutral-200 shadow-lg hover:text-neutral-200 focus:text-neutral-100 dark:bg-neutral-100 lg:py-4">
                <div className=" flex w-full flex-wrap items-center justify-between px-6">
                    <span className="text-neutral-800"><span className='text-blue-700'>Start Suscription</span> / All books</span>
                </div>
            </nav>
            <div className='justify-center flex mt-10'><h1 className='text-neutral-800 mt-16 text-center text-4xl font-bold mb-5 title flex'><span className='sm:mr-1 mr-4 text-neutral-800'><BsBook className='my-auto mx-auto' /></span>Our Directories</h1></div>
            <div className=" sm:block grid grid-cols-3-cols gap-4 mt-2">
                {
                    catalogue.map(cata => (
                        <Cardlivre route={cata.image} titre={cata.intitule} />
                    ))
                }  
            </div>
        </div>
    )
}
