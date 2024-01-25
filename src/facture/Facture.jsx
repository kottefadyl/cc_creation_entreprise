import React from 'react'
import gestbiblio from './logo512.png'

export default function Facture() {
    
    return (
        <div className='text-cyan-700 bg-blue-300'>

            <div className="sm:w-full">
                <div className="flex justify-center sm:block">
                    <div className="bg-white p-6 h-full sm:p-0">
                        <div className="border-solid border-4 border-cyan-700 h-full sm:p-1">
                            <div className="text-center flex items-center">
                                <img src={gestbiblio} className="h-20  sm:h-16 sm:mr-3 float-left" alt="" srcset="" />
                                <div className="mt-4 sm:mt-0 text-center float-right">
                                    <h3 className="text-start text-xl font-bold">
                                        GestBiblio
                                    </h3>
                                    <span className="m-6 text-center">
                                        {' '}
                                        Appel/WhatsApp : 6 658 25 05 47/ 651 44 89 56 <br /> Email :
                                        kottekevin01@gmail.com
                                        <br />
                                        Yaounde/ ekoumdoum
                                    </span>
                                </div>
                            </div>
                            <div className="sm:hidden mt-9 mx-40 rounded border-4 w-96 bg-blue-300 "></div>
                            <div className="mx-auto m-6 mt-24 ">
                                <div className="text-start text-xl sm:mt-10">
                                    <span className="text-right font-bold sm:text-sm">
                                        N% : <span>st0350</span>
                                    </span>
                                </div>
                                <div className="text-start text-xl">
                                    {' '}
                                    <h3>
                                        {' '}
                                        <span className="font-bold underline sm:text-sm">
                                            Recu payement de livres/abonnement
                                        </span>
                                    </h3>
                                </div>
                                <div className="text-end">
                                    {' '}
                                    <h3>
                                        {' '}
                                        <span className="font-bold text-xl sm:text-sm">Date :</span>{' '}
                                        <span className='sm:text-sm'> 16/06/2023</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-16 ">
                                <div>
                                    Nom et Prenom : <span className="font-bold">Ln K Lema</span>
                                </div>
                                <div className="flex items-center justify-center m-2 mt-9">
                                    <table className="border-collapse w-full">
                                        <thead>
                                            <tr>
                                                <th className="border text-start pl-9">Frais</th>
                                                <th className="border text-end pr-9">montant Fcfa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border pl-9">Pension Net</td>
                                                <td className="border text-end pr-9">XXX XXX</td>
                                            </tr>
                                            <tr>
                                                <td className="border pl-9">Montant versé</td>
                                                <td className="border text-end pr-9">XXX XXX</td>
                                            </tr>
                                            <tr>
                                                <td className="border pl-9">Reste a payé</td>
                                                <td className="border text-end pr-9">XXX XXX</td>
                                            </tr>
                                            <tr>
                                                <td className="border font-bold pl-9">Total versement</td>
                                                <td className="border text-end pr-9 font-bold">XXX XXX</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
