import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alertgreencomponent from '../../alertcomponent/alertgreencomponent';
import { useParams } from 'react-router-dom';
import PayStripForm from '../stripeform/PayStripForm'

import GooglePayFroms from '../googlepayform/googlePayFroms';



function AbonneRegister() {

  const {id} = useParams()
  const [abnmntO, setAbonmtO] = useState([]);
  const [hidepay, sethidepay] = useState(["hidden"]);
  const [formhide, setformhide] = useState([""]);

  const [inputValues, setInputValues] = useState({
    nom: '',
    prenom: '',
    email:'',
    mdp:'',
    img:'',
    inputconfirmpassword :''
    // Ajoutez les noms des autres inputs et initialisez-les avec des valeurs vides
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
 
  useEffect(() => {
    // Effectuer une requête GET pour récupérer les todos depuis votre API
    axios.get(`http://192.168.115.38:8000/api/abonnement/${id}`)  // Remplacez l'URL par l'URL de votre API
      .then(response => {
        setAbonmtO(response.data);  // Mettre à jour l'état avec les todos récupérés depuis l'API
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catalogues :', error);
    });
}, [id])

 const openpay =()=>{
    sethidepay("")
    setformhide("hidden")
 }
 const closepay =()=>{
  sethidepay("hidden")
  setformhide("")
}

  return (
      <div>
        <div className="g-6 flex h-full  items-center justify-center lg:justify-between">
          <div
            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-6/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample" />
          </div>

          <div className="m-5 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-stretch px-5 xl:px-5 py-5 mr-5">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <Alertgreencomponent intitule={abnmntO.intitule} duree= {abnmntO.duree} nombreLivre={abnmntO.nombreLivre} />  
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Validation de l' abonemment</h2>
              </div>

              <div className="m-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className={formhide}>
                <form className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        name
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                      type="text" 
                      placeholder="Salsman"
                      name="nom"
                      value={inputValues.nom}
                      onChange={handleInputChange} />

                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Prenom
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text" 
                      placeholder="Jane"
                      name="prenom"
                      value={inputValues.prenom}
                      onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text" 
                        placeholder="name@example.com" 
                        name="email"
                        value={inputValues.email}
                        onChange={handleInputChange}/>
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Mots de passe
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" 
                      type="password"
                      name="mdp"
                      value={inputValues.mdp}
                      onChange={handleInputChange}
                      />
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                         Confirmer le Mots de passe
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password"
                      name="inputconfirmpassword"
                      value={inputValues.inputconfirmpassword}
                      onChange={handleInputChange}
                      />
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Profile
                      </label>
                      <input type="file" className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-400 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-blue-700 dark:file:text-blue-100 dark:focus:border-primary" id="grid-password" 
                      name="img"
                      value={inputValues.img}
                      onChange={handleInputChange}
                      />
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <button type='button' onClick={openpay}  className=" mb-10 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 " id='bottonsuscription'>
                    Souscrire
                  </button>
                 
                </form>
                </div>
              
              </div>
              <div className={hidepay} >
                  <PayStripForm data={inputValues} montant={abnmntO.montant} />
                  <GooglePayFroms />
                  <button type='button' onClick={closepay}  className="mb-10 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 " id='bottonsuscription'>
                    Retour
                  </button>
                  </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AbonneRegister