import React from 'react'
import './imageCard.css'

const Cardlivre = (props) => {
    return (
        <div className="m-3 block  bg-neutral-100 text-black rounded">
            <div className=" max-h-full max-w-full overflow-hidden rounded  container">
                <img
                    className="h-full w-full imagecard "
                    src={props.route}
                    alt="" />
            </div>
            <div className="p-4 h-30 text-center">
                <h2 className=' text-neutral-800 font-blod text-2xl font-bold'>{props.titre}</h2>
                <p class=" mx-3 text-neutral-800 py-4 text-sm">
                   
                </p>
                <button className="bg-transparent hover:bg-blue-200 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-lg">
                    preview & download
                </button>
            </div>
        </div>
    )
}

export default Cardlivre
