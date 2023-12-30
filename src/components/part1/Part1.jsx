import React from 'react'
import Cardlivre from '../cardlivre/cardlivre'
import image1 from "./téléchargement.jpg"
import image2 from "./images.jpg"
import image3 from './B9735615901Z.1_20231209004119_000+G8PNUF4LN.1-0.jpeg.jpg'
import image4 from './book-1283468_640.jpg'
import image5 from './image-1-1-1200x900.jpg'
import image6 from './religion1.jpg'
import './part1.css'
import { BsBook } from "react-icons/bs";
export default function Part1() {
    return (
        <div className='h-screen mx-40 '>
            <nav className="mt-6 relative flex w-full flex-wrap items-center justify-between bg-[#686363] py-2 text-neutral-200 shadow-lg hover:text-neutral-200 focus:text-neutral-100 dark:bg-neutral-100 lg:py-4">
                <div className=" flex w-full flex-wrap items-center justify-between px-6">
                    <span className="text-neutral-800"><span className='text-red-700'>Start Suscription</span> / All books</span>
                </div>
            </nav>
            <div className='justify-center flex'><h1 className='mt-16 text-center text-4xl font-bold mb-5 title flex'><span className='mr-4'><BsBook className='my-auto ' /></span>Our Directories</h1></div>
            <div className="grid grid-cols-3-cols gap-4 mt-2">
                <Cardlivre route={image1} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre route={image2} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre route={image3} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre route={image4} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre route={image5} titre="livredoo" description="livre de compte de phylosophie " />
                <Cardlivre route={image6} titre="livredoo" description="livre de compte de phylosophie " />
            </div>
        </div>
    )
}
