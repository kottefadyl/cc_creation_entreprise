import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alertgreencomponent from '../../alertcomponent/alertgreencomponent';
import { useParams, useNavigate } from 'react-router-dom';
import PayStripForm from '../stripeform/PayStripForm'
import urlapi from '../../urlApi';
import GooglePayFroms from '../googlepayform/googlePayFroms';

function AbonneRegister() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  useEffect(() => {
      const users = localStorage.getItem('user') || '[]';
      if (users) {
          setUser(JSON.parse(users));
      }
      if (!user) {
        navigate('/');
      }
  }, [user])

if (user.length === 0) {
  navigate('/')
}
  const {id} = useParams()
  const [abnmntO, setAbonmtO] = useState([]);

 
  useEffect(() => {
    axios.get(urlapi +`/abonnement/${id}`)
      .then(response => {
        setAbonmtO(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catalogues :', error);
    });
}, [id])

const handleSubmit = () => {
  console.log('id de utilisateur',user[0].id);
  try {
    console.log(user);
    const response =  axios.post(urlapi+'/Effectuer/', {
      idabonne: user[0].id,
      idabonnement: id
    });
    console.log(response.data);
 } catch (error) {
    console.error(error);
 }
}
;
  return (
      <div>
        <div className=" g-6 sm:w-auto sm:mx-auto sm:block sm:items-center sm:justify-center flex h-full  items-center justify-center lg:justify-between">
          <div
            className=" items-center text-center shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-6/12 md:shrink-0 lg:w-6/12 xl:w-6/12 sm:w-full">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample" />
          </div>

          <div className="m-5 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-stretch px-5 xl:px-5 py-5 mr-5">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 sm:justify-center sm:items-center sm:px-0">
            <Alertgreencomponent intitule={abnmntO.intitule} duree= {abnmntO.duree} nombreLivre={abnmntO.nombreLivre} />  
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Validation de l' abonemment</h2>
              </div>
              <div className='' >
                  <PayStripForm  montant={abnmntO.montant} action={handleSubmit} />
                  <GooglePayFroms />
                  </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AbonneRegister
