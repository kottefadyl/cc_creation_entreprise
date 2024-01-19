import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alertgreencomponent from '../../alertcomponent/alertgreencomponent';
import { useParams } from 'react-router-dom';
import PayStripForm from '../stripeform/PayStripForm'
import urlApi from '../../urlApi';
import GooglePayFroms from '../googlepayform/googlePayFroms';



function AbonneRegister() {

  const {id} = useParams()
  const [abnmntO, setAbonmtO] = useState([]);
  const [hidepay, sethidepay] = useState(["hidden"]);
  const [formhide, setformhide] = useState([""]);
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    email: '',
    tel: '',
    mdp: '',
    confirmpassword: ''
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };
 
  useEffect(() => {
    // Effectuer une requête GET pour récupérer les todos depuis votre API
    axios.get(urlApi +`/abonnement/${id}`)  // Remplacez l'URL par l'URL de votre API
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
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  for (let key in formState) {
    formData.append(key, formState[key]);
  }
  
  // Vous pouvez maintenant utiliser formData pour votre requête HTTP
  for (let pair of formData.entries()) {
    console.log(pair[0]+ ', '+ pair[1]); 
  }

  fetch( urlApi + '/abonne/', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(openpay())
  .then(data => console.log(data))
  .catch((error) => console.error('Error:', error));
};


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
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        name
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                      type="text" 
                      placeholder="Salsman"
                      value={formState.nom}
                      name="nom"
                      onChange={handleChange} />

                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Prenom
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text" 
                      placeholder="Jane"
                      value={formState.prenom}
                      name="prenom"
                      onChange={handleChange} 
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                        type="text" 
                        placeholder="name@example.com" 
                        value={formState.email}
                        name="email"
                        onChange={handleChange}/>
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Telephone
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                        type="text" 
                        placeholder="69772987497" 
                        value={formState.tel}
                        name="tel"
                        onChange={handleChange}/>
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Mots de passe
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" 
                      required
                      type="password"
                      value={formState.mdp}
                      name="mdp"
                      onChange={handleChange}
                      />
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                         Confirmer le Mots de passe
                      </label>
                      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      value={formState.confirmpassword}
                      name="confirmpassword"
                      onChange={handleChange}
                      />
                      <p className="text-gray-600 text-xs italic"></p>
                    </div>
                  </div>
                 
                  <input type="submit" className=" mb-10 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 " value="Enregistrer" />
                </form>
                </div>
              
              </div>
              <div className={openpay} >
                  <PayStripForm  montant={abnmntO.montant} />
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