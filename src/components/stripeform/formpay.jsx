import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'

 import {  useState } from 'react'
function Formpayer(props) {
   const stripe= useStripe()
   const elements= useElements()
   const [name,setName]=useState('')
   const [postalCode,setPostalCode]=useState('')
 
    const generateStripeToken=async () => {
        if(!stripe || !elements){
            console.log('le stripe et element n existe pas ');
            return ;
        }
        const CardNumberElements=elements.getElement(CardNumberElement);
        const {token ,error}= await stripe.createToken(CardNumberElements ,{name:name,address_zip:postalCode})
        if (!token || error) {
            console.log(error|| "token is not set ");
            throw error
        }
        return token
    }
    const handleSubmit=async (e) => {
        e.preventDefault()
        console.log(props.data)
        console.log(props.montant)
       
        try {
           const token= await generateStripeToken()
            alert(token?.id)

            const paymentIntent = await stripe.confirmCardPayment(token?.id, {
              amount: 1,
              currency: "EUR",
            });
        
            console.log(paymentIntent);
        
            // Traitez la réponse de Stripe
            // if (paymentIntent.status === "succeeded"){
            //     console.log("payement")
            // }

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
      <CardNumberElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber"  />
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardExp">
        Exp
      </label>
      <CardExpiryElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardExp"  />
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
       CVC 
      </label>
      <CardCvcElement className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvc"  />
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
       Name 
      </label>
      <input  onChange={e =>setName(e.target.value)} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name"  required/>
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postalcode">
       Code Postal 
      </label>
      <input  onChange={e =>setPostalCode(e.target.value)} value={postalCode} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="postalcode"  required/>
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