import React, { useState, useEffect } from 'react';
import  '../../cardlivre/imageCard.css'
import ModalBookDetail from './ModalBookDetail';
import axios from 'axios';
import urlapi from '../../../urlApi';

const  MultiActionAreaCard = (props) => {
  const lien = "https://necsarl.pythonanywhere.com/media/"
  const [livreauteur, setlivreauteur] = useState([]);

  useEffect(() => {
    // Effectuer une requête GET pour récupérer les todos depuis votre API
    axios.get(urlapi + `/auteur/${props.idauteur}`)  // Remplacez l'URL par l'URL de votre API
      .then(response => {
        setlivreauteur(response.data);  // Mettre à jour l'état avec les todos récupérés depuis l'API
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des auteur:', error);
      });
  }, [])


  return (
    <div class="rounded overflow-hidden shadow-lg max-w-80 transition duration-1000 delay-150 transform hover:scale-110 mb-10 ">
      <img class="w-full container2" src={lien + props.image} alt="Sunset in the mountains" />
      <div class="px-4 ">
        <div class="font-bold text-xl mb-2 overflow-hidden text-ellipsis line-clamp-1 mt-2">{props.titre}</div>
        <p class="text-gray-700 text-base overflow-hidden text-ellipsis line-clamp-1">
          {props.description}
        </p>
      </div>
      <div class="px-3 pt-1 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">travel</span>
        <ModalBookDetail title = {props.titre} description={props.description} img= {lien + props.image}  prix={props.prix} nomauteur={livreauteur.nom} prenomauteur={livreauteur.prenom} id={props.id}/>
      </div>

    </div>
  );
}
export default MultiActionAreaCard