import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './part2.css'
import '../part1/part1.css'
import { BsBook, BsCircle } from "react-icons/bs";
import urlapitext from '../../urlapiTest';
import urlapi from '../../urlApi';


export default function Part2() {


    const [abonmt, setAbonmt] = useState([]);


    useEffect(() => {
        // Effectuer une requête GET pour récupérer les todos depuis votre API
        axios.get(urlapi + '/abonnement')  // Remplacez l'URL par l'URL de votre API
            .then(response => {
                setAbonmt(response.data);  // Mettre à jour l'état avec les todos récupérés depuis l'API
                console.log(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des abonnements :', error);
            });
    }, [])
    
    return (
        <div className='mt-10 bg-neutral-100 sm:p-0 p-16'>
            <h1 className='custum-class-part2 flex justify-center  text-center text-neutral-800 text-4xl font-bold titre'><span className='mr-4 text-neutral-800'><BsBook className='my-auto mx-auto' /></span> About Subscriptions </h1>
            <div className='flex classCus mt-9 '>
                <div className=' h-full'>
                    {
                        abonmt.map(abonmt => (
                            <div className=' sm:ml-4 ml-16 shadow-neutral-600 shadow-xl rounded pb-6 mb-6'>
                                <div className='flex justify-between bg-blue-500 text-neutral-100 p-2 pl-5 rounded-t font-bold'>
                                    <ul className='flex text-sm my-auto'>
                                        <li className='ml-2'><BsBook /></li>
                                        <li className='ml-2'><BsCircle /></li>
                                        <li className='ml-2'><BsCircle /></li>
                                        <li className='ml-2'><BsCircle /></li>
                                    </ul>
                                    <span>{abonmt.duree} months</span>
                                </div>
                                <div className='sm:p-2 p-7'>
                                    <span className='font-semibold text-md'>Course</span>
                                    <h1 className='texte-md font-bold mt-1 sm:max-w-full max-w-80'>{abonmt.intitule}</h1>
                                    <p className='mt-2'>{abonmt.description}</p>
                                </div>
                                <div className='p-5 pl-7'>
                                    <button className='rounded-3xl border-neutral-300 border-2 p-2 text-sm'>
                                        give note
                                    </button>
                                    <button className='ml-5 rounded-3xl border-neutral-300 border-2 p-2 text-sm'>
                                        <Link className="edit-link"
                                            to={`/soucription/${abonmt.id}`}>
                                            Suscribe
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className='bg-red-300 h-full ml-9'>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
