import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Formpayer from "./formpay";
import { loadStripe } from "@stripe/stripe-js";
const stripe = loadStripe('pk_test_51L5SZ1AUXuv32ejpJZGLQSoh4Y4d2o3RcsjlQXxXMnlFtKbFhm3OQtsZIUAUXihxxZH7w9cNhzFVYeCrY0HUvIq700hjkCQUAN')

const PayStripForm = ({ montant, action }) => {

  return (
    <div className="sm:m-6">
      <Elements stripe={stripe}>
        <Formpayer montant={montant} action={action} />
      </Elements>
    </div>
  );
};

export default PayStripForm;