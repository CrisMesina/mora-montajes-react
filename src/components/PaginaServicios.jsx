import React from 'react'
import { Carousel } from './Carousel'

export const PaginaServicios = () => {
  return (
    <>
        <div className='flex flex-row ms:flex-wrap h-xxl'>
            <div className='w-full text-center'>
                <h1 className='text-white mx-auto mt-44 mb-5 text-7xl font-extrabold animate-fade-down animate-duration-[3000ms]'>Servicios</h1>
                <p className='text-white animate-fade-down animate-duration-[3000ms]'>Aqui encontraras todos los proyectos y servicios que otorgamos</p>
            </div>
        </div>
        <div className='flex flex-row ms:flex-wrap'>
            <div>
                <h1>
                    
                </h1>
            </div>
            <Carousel/>
            
        </div>
    </>
    )
}
