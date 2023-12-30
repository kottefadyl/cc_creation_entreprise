import React from 'react'
import Cardlivre from '../cardlivre/cardlivre'
import image1 from "./téléchargement.jpg"
import image2 from "./images.jpg"
export default function Part1() {
    return (
        <div className='h-screen mx-40'>
            <nav className="mt-6 relative flex w-full flex-wrap items-center justify-between bg-[#686363] py-2 text-neutral-200 shadow-lg hover:text-neutral-200 focus:text-neutral-100 dark:bg-neutral-100 lg:py-4">
                <div className=" flex w-full flex-wrap items-center justify-between px-6">
                    <span className="text-neutral-800"><span className='text-red-700'>Start Suscription</span> / All books</span>
                </div>
            </nav>
            <div className="grid-cols-1 sm:grid md:grid-cols-3 mt-10">

                <Cardlivre route={image1} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre route={image2} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre titre="livredoo" description="livre de compte de phylosophie " />

            </div>
        </div>
    )
}
