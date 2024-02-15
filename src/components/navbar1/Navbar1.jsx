import React, { useState, useEffect } from 'react';
import { BsCaretDownFill, BsSearch, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './navbar1.css';
import { useParams, useNavigate } from 'react-router-dom';
import urlapi from '../../urlApi';
import axios from 'axios';

function Navbar1() {
  const navigate = useNavigate();
  // Un état qui stocke le user.id
  const [user, setUser] = useState('');
  
  // Un effet qui récupère le user.id du localStorage au montage du composant


  return (
    <nav className="p-3 text-gray-500 ">
      <div className="flex 2xl:justify-between lg:justify-between md:mx-1 3xl:justify-between  3xl:mx-40 sm:mx-1">
        <ul className="flex">
          <li className="font-bold text-lg my-auto mr-4">Command </li>
          <li className="mx-5 sm:hidden flex">
            Theme<BsCaretDownFill className="text-sm my-auto" />
          </li>
          <Link to={'https://necsarl.pythonanywhere.com/media/images/db.xlsx'} className="mx-5 sm:hidden no-underline flex cursor-pointer transition duration-700 hover:scale-110 active:scale-90">
            download <BsCaretDownFill className="text-sm my-auto  " />
          </Link>
          <Link
            to={`/facture/livre/${user.id}`}
            className="mx-5 sm:hidden flex cursor-pointer transition duration-700 hover:scale-110 active:scale-90 no-underline"
          >
            Invoices<BsCaretDownFill className="text-sm my-auto" />
          </Link>
          <Link to={'https://necsarl.pythonanywhere.com/api/refresh2'} className="mx-5 sm:hidden flex">
            Actualisé<BsCaretDownFill className="text-sm my-auto" />
          </Link>
        </ul>
        <ul>
          <li className="flex">
            <BsStar className="my-auto mr-1 sm:hidden" />{' '}
            <span className="sm:hidden">premium</span>{' '}
            <BsCaretDownFill className="text-sm my-auto sm:hidden" />
            <BsSearch className="ml-3 my-auto" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar1;
