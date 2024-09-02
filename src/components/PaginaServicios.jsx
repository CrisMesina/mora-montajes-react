import React from 'react'
import { Carousel } from './Carousel'

export const PaginaServicios = () => {
  return (
            <div className='w-full text-center mx-10'>
    <div className="flex flex-row ms:flex-wrap w-full pb-2 mt-20">
        <div className='w-full h-screen'>
            <div className='w-full' >
                <h1 className='text-center font-extrabold text-6xl'>Servicios!</h1>
                <p className='text-center my-5 text-2xl'>Aqui podras encontrar todos nuestros servicios disponibles!</p>
            </div>
            <div  className='w-full'>
                <ul className='w-full'>
                    <div  className='my-2 mx-23'>
                        <a href="/" className='mx-2 underline hover:text-blue-700' >Planimetria y Fabricacion</a>
                        <a href="/" className='mx-2 underline hover:text-blue-700' >Transportadores de banda</a>
                        <a href="/" className='mx-2 underline hover:text-blue-700' >Estructuras y plataformas de acero</a>
                        <a href="/" className='mx-2 underline hover:text-blue-700' >Montaje de Estructuras metalicas</a>
                    </div>
                    <div className='my-2 mx-23'>
                        <a href="/" className='mx-2 my-5 underline hover:text-blue-700' >Servicios de Corte CNC</a>
                        <a href="/" className='mx-2 my-5 underline hover:text-blue-700' >Piping de acero inoxidable</a>
                        <a href="/" className='mx-2 my-5 underline hover:text-blue-700' >Servicios de soldadura</a>
                    </div>
                </ul>
            </div>
        </div>
        <div className='w-full h-screen'>   
            s
        </div>
    </div>
    )
}
