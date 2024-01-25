import React, { useState, useEffect } from 'react';
import urlApi from '../../urlApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Singup() {
    const navigate = useNavigate();
    
    const [formState, setFormState] = useState({
        nom: '',
        prenom: '',
        email: '',
        tel: '',
        mdp: '',
        confirmpassword: '',
        img: ''
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
      
        if (type === 'file') {
          setFormState(prevState => ({ ...prevState, [name]: files[0] }));
        } else {
          setFormState({
            ...formState,
            [name]: value
          });
        }
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('nom', formState.nom);
        formData.append('prenom', formState.prenom);
        formData.append('email', formState.email);
        formData.append('tel', formState.tel);
        formData.append('mdp', formState.mdp);
        formData.append('confirmpassword', formState.confirmpassword);
        formData.append('img', formState.img);

        // Vous pouvez maintenant utiliser formData pour votre requête HTTP
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        fetch(urlApi + '/abonne/', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => console.error('Error:', error));
            toast('you have been registered, please log in');
            navigate('/');
    };


    return (
        <>
            <main className="w-full h-screen flex flex-col items-center justify-center px-4">
                <div className="max-w-sm w-full text-gray-600 space-y-5">
                    <div className="text-center pb-8">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                        <div className="mt-5">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create your account</h3>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Name
                            </label>
                            <input
                                onChange={handleChange}
                                value={formState.nom}
                                type="text"
                                required
                                name='nom'
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                FirstName
                            </label>
                            <input
                                onChange={handleChange}
                                value={formState.prenom}
                                type="text"
                                name="prenom"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                value={formState.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                phone's Number
                            </label>
                            <input
                                value={formState.tel}
                                onChange={handleChange}
                                type="text"
                                name='tel'
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                name='mdp'
                                value={formState.mdp}
                                onChange={handleChange}
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Confirm password
                            </label>
                            <input
                                value={formState.confirmpassword}
                                onChange={handleChange}
                                name='confirmpassword'
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div className="mb-3 w-96">
                            <label
                                htmlFor="formFile"
                                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                            >
                                Default file input example
                            </label>
                            <input
                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="formFile"
                                name='img'
                                onChange={handleChange}

                            />
                        </div>
                        <input
                            type='submit'
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"

                            value='Sign Up'
                        />
                    </form>
                </div>
            </main>

        </>
    )
}

export default Singup
