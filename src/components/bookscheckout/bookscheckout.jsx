import { useEffect, useState } from 'react'
import PayStripForm from '../stripeform/PayStripForm'
import { chercher1, deletelivrelocalstorage, sommecart } from '../../import_fonction/importfonction'
import urlapi from '../../urlApi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import img1 from './chriot-vide.jpg' 

function BooksCheckout() {
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('user');
    
        if (!user) {
          navigate('/');
        }
      }, []);
    const [user, setUser] = useState([]);
    useEffect(() => {
        const users = localStorage.getItem('user');
        if (users) {
            setUser(JSON.parse(users));
        } 

    }, [])

    const [commande, setcommande] = useState([]);
    useEffect(() => {
        const commandes = localStorage.getItem('commande');
        if (commandes) {
            setcommande(JSON.parse(commandes));
        }

    }, [])

    const somme = sommecart()
    console.log(somme);

    const [formState, setFormState] = useState({
        nom: '',
        prenom: '',
        tel: '',
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };
    const [data, setData] = useState([]);
    const [showpay, setShowpay] = useState("");
    useEffect(() => {
        const datas = localStorage.getItem('commande');
        if (datas) {
            setData(JSON.parse(datas));
        }

    }, [])
    const handleSubmit = async () => {

        try {
            const response = await axios.post(urlapi + '/commande/', {
                id: user[0].id

            });
            console.log(response.data);
            for (let i = 0; i < commande.length; i++) {
                await axios.post(urlapi + '/conserner/', {
                    idcom: response.data.id,
                    quantite: 1,
                    Montant: commande[i].prixlivre,
                    idliv: commande[i].idlivre
                });
            }

        } catch (error) {
            console.error(error);
        }
        navigate('/dash');
        localStorage.removeItem('commande');

    };



    if (data.length !== 0) {
        return (
            <>
                <div>
                    <h1 className="text-center m-10 text-4xl font-bold leading-9 tracking-tight text-gray-900">Validation de la commande</h1>
                    <div
                        className="g-6 w-auto flex h-full flex-wrap  justify-center lg:justify-between">

                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">

                        </div>

                        <div className="">
                            <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Commande</h2>
                            <div className="flow-root overflow-y-scroll h-72">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">

                                    {data.map((datas1) => (
                                        <li key={data.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={datas1.image}
                                                    alt=''
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h5>
                                                            {datas1.titrelivre}
                                                        </h5>
                                                        <p className="ml-3">{datas1.prixlivre} $</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500"></p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500">Qty 1</p>

                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <div>
                            </div>
                            <div className="flex mt-16 justify-between text-xl  font-bold text-gray-900">
                                <p>Total :</p>
                                <p>{somme}$</p>
                            </div>
                        </div>

                        <div className={showpay}>
                            <div className="sm:mr-0 sm:p-0 sm:px-1 sm:m-0 sm:w-full m-10 md:mb-4 md:w-8/12 lg:w-5/12 xl:w-5/12 xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-stretch px-5 xl:px-5 py-5 mr-5">
                                <PayStripForm montant={somme} action={handleSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (data.length === 0) {
        return (
            <>
                <div>
                    <h1 className=" text-center m-10 text-4xl font-bold leading-9 tracking-tight text-gray-900">Validation de la commande</h1>
                    <div
                        className="g-6 m-auto sm:w-full flex h-full flex-wrap  justify-center lg:justify-between">


                        <div className="sm:w-full  text-center p-2">
                            <p className='text-3xl mt-24 font-semibold '> The Cart is Empty</p>
                            <img src={img1} className='h-40 w-full items-center text-center justify-center' alt="" srcset="" />
                        </div>

                    </div>
                </div>
            </>
        )
    }

}

export default BooksCheckout