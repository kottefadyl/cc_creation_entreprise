import React from 'react'
import './imageCard.css'

const Cardlivre = (props) => {
    return (
        <div className="m-3 block  bg-zinc-300 text-black rounded">
            <div className=" max-h-full max-w-full overflow-hidden  container">
                <img
                    className="h-full w-full imagecard "
                    src={props.route}
                    alt="" />
            </div>
            <div className="p-5  text-center">
                <h2 className=' text-black font-blod text-2xl font-bold'>{props.titre}</h2>
                <p class=" mx-3 text-black py-4 text-sm">
                    {props.description}
                </p>
                <button className="bg-white text-black px-5 py-1  rounded-sm font-bold shadow-zinc-800 shadow-sm text-sm border-b-2">
                    preview & download
                </button>
            </div>
        </div>
    )
}

export default Cardlivre
