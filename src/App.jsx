import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import AbonneRegister from './components/abonneformregister/abonnerformRegister';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/soucription/:id' element={<AbonneRegister />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
