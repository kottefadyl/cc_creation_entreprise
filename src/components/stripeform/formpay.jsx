import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useState } from 'react'
import urlapi from '../../urlApi'

function Formpayer(props) {
  const stripe = useStripe()
  const elements = useElements()
  const [name, setName] = useState('')
  const [postalCode, setPostalCode] = useState('')

  // Effectuer une requête GET pour récupérer les todos depuis votre API

  const [abonneData] = useState({
    nom: "",
    prenom: "",
    email: "",
    mdp: "",
    tel: "",
    img: ""
  });
  const generateStripeToken = async () => {
    if (!stripe || !elements) {
      console.log('le stripe et element n existe pas ');
      return;
    }
    const CardNumberElements = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(CardNumberElements, { name: name, address_zip: postalCode })
    if (!token || error) {
      console.log(error || "token is not set ");
      throw error
    }
    return token
  }
  const handleSubmit = async (e) => {
    e.preventDefault()


    try {
      const token = await generateStripeToken()
      alert(token?.id)
      console.log(props.montant)
      axios.post(urlapi + '/payement/', { data: token, amount: props.montant * 1000 })  // Remplacez l'URL par l'URL de votre API
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Erreur lors de l envoi  des information sur l abonnement  :', error);
        });

    } catch (error) {
      console.log("erreur :", error)
    }

  }

  return (

    <div className="w-full">
      <h1 className="block text-gray-700 text-xl font-bold mb-2  text-left">Payement Par Card </h1>
      <form onSubmit={handleSubmit} className="w-auto">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CardNumber">
            Card Number
          </label>
          <CardNumberElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber" />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardExp">
            Exp
          </label>
          <CardExpiryElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardExp" />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
            CVC
          </label>
          <CardCvcElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvc" />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input onChange={e => setName(e.target.value)} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" required />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalcode">
            Code Postal
          </label>
          <input onChange={e => setPostalCode(e.target.value)} value={postalCode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="postalcode" required />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            valider le payement
          </button>

        </div>
      </form>
    </div>

  )
}

export default Formpayer