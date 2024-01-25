import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import AbonneRegister from './components/abonneformregister/abonnerformRegister';
import Livrecata from './components/livreCathalogue/Livrecata';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import BooksCheckout from "./components/bookscheckout/bookscheckout"
import AbonnerLogin from "./components/abonneformlogin/abonneformlogin"
import Singup from './components/signup/singup';
import Facture from './facture/Facture';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<AbonnerLogin />}></Route>
        <Route path='/soucription/:id' element={<AbonneRegister />}></Route>
        <Route path='/livre_catalogue/:id' element={<Livrecata />}></Route>
        <Route path='/checkout/' element={<BooksCheckout />}></Route>
        <Route path='/dash/' element={<Home />}></Route>
        <Route path='/singup/' element={<Singup />}></Route>
        <Route path='/facture/livre/:id' element={<Facture />}></Route>
      </Routes>
    </BrowserRouter>                         
  );
}

export default App;
