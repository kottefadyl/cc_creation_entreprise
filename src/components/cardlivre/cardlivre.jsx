import React from 'react'

const Cardlivre = (props) => {
    return (
        <div className="m-3 block  bg-zinc-300 text-black ">
            <div className="relative overflow-hidden w-full h-30">
                <img
                    className="rounded-t-lg h-20 w-full  object-cover "
                    src={props.route}
                    alt="" />
            </div>
            <div className="p-5  text-center">
                <h2 className=' text-black font-blod text-2xl font-bold'>{props.titre}</h2>
                <p class=" mx-3 text-black py-4 text-sm">
                    {props.description}
                </p>
                <button
                    className="bg-white text-black px-5 py-1  rounded-sm font-bold shadow-zinc-800 shadow-sm text-sm">
                    preview & download
                </button>
            </div>
        </div>
    )
}

export default Cardlivre
