import React from 'react'
import { Footer } from './Footer'

export const Servicios = () => {
  return (
    <>
    <div className="flex flex-row ms:flex-wrap w-full pb-2 mt-20">
        <div className='w-full h-96'>
            <div className='w-full' >
                <h1 className='text-center font-extrabold text-6xl'>Servicios!</h1>
                <p className='text-center my-5 text-2xl'>Aqui podras encontrar todos nuestros servicios disponibles!</p>
            </div>
            <div  className='w-full'>
                <ul className='w-full'>
                    <div  className='my-2 mx-23'>
                        <a href="/#servicios/FyM" className='mx-2 underline hover:text-blue-700' >Planimetria y Fabricacion</a>
                        <a href="/#servicios/Transportadores" className='mx-2 underline hover:text-blue-700' >Transportadores de banda</a>
                        <a href="/#servicios/fym" className='mx-2 underline hover:text-blue-700' >Estructuras y plataformas de acero</a>
                        <a href="/#servicios/fym" className='mx-2 underline hover:text-blue-700' >Montaje de Estructuras metalicas</a>
                    </div>
                    <div className='my-2 mx-23'>
                        <a href="/#servicios/fym" className='mx-2 my-5 underline hover:text-blue-700' >Servicios de Corte CNC</a>
                        <a href="/#servicios/fym" className='mx-2 my-5 underline hover:text-blue-700' >Piping de acero inoxidable</a>
                        <a href="/#servicios/fym" className='mx-2 my-5 underline hover:text-blue-700' >Servicios de soldadura</a>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    <Footer/>

    </>
    )
}
