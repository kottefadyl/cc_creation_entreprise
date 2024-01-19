import React, { useState, useEffect } from 'react';
import axios from 'axios';
import urlapi from '../../urlApi';
import { useParams } from 'react-router-dom';
import MultiActionAreaCard from './card/MultiActionAreaCard';
import { BsBook } from "react-icons/bs";



export default function Livrecata() {
  const [show, setShow] = useState(false);

  const { id } = useParams()
  const [livrecatalog, setlivrecatalog] = useState([]);
  useEffect(() => {
    // Effectuer une requête GET pour récupérer les todos depuis votre API
    axios.get(urlapi + `/book_per_catalogue/${id}`)  // Remplacez l'URL par l'URL de votre API
      .then(response => {
        setlivrecatalog(response.data['livres par catalogue']);  // Mettre à jour l'état avec les todos récupérés depuis l'API
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des lives du catalogue  :', error);
      });
  }, [])

  return (
    <div>
      <div className='m-4 mt-10'><h1 className='flex my-auto justify-center text-4xl font-bold'><span className='my-auto mx-2'><BsBook /></span>directory</h1></div>
      <div className=" sm:block grid grid-cols-3-cols gap-4 mt-16 mx-28" >

        {
          livrecatalog.map(livres => (
            <button onClick={() => {
            }}> <MultiActionAreaCard image={livres.image} titre={livres.titre} description={livres.description} prix={livres.prix} id={livres.id} idauteur={livres.idauteur_id} />
            </button>
          ))
        }
      </div>
    </div>

  )
}
