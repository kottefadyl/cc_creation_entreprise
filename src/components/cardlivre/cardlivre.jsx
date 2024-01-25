import React from 'react'
import './imageCard.css'
import { Link } from 'react-router-dom'

const Cardlivre = (props) => {

    return (
        <div className="m-3 block  bg-neutral-100 text-black rounded">
            <div className=" max-h-full max-w-full overflow-hidden rounded-t-lg  container h-full w-full p-0 ">
                <img
                    className="h-full w-full imagecard "
                    src={props.route}
                    alt="" />
            </div>
            <div className="p-7 h-30 text-center">
                <h2 className=' text-neutral-800 font-blod text-2xl font-bold'>{props.titre}</h2>
                <button className="p-1 mt-3 no-underline bg-transparent hover:bg-blue-200 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded-lg">
                <Link className=" no-underline" 
                    to={`/livre_catalogue/${props.id}`}> 
                    preview & download
                </Link>       
                </button>
            </div>
        </div>
    )
}

export default Cardlivre
