import React from 'react'
import { Carousel } from './Carousel'

export const PaginaServicios = () => {
  return (
    <>
        <div  className='flex flex-row ms:flex-wrap h-xxl w-full'>
            <div className='w-full text-center mx-10'>
                <div className='w-60 h-full'>
                    <ul className='my-auto list-none text-sm'>
                        <h3 className='mx-auto text-2xl my-auto'>Listado de Servicios</h3>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Planimetria y fabricacion</a></li>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Transportadores de banda</a></li>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Estructuras y plataformas de acero</a></li>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Montaje de estructuras metalicas</a></li>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Servicios de Corte CNC</a></li>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Piping en Acero Inoxidable</a></li>
                        <li className="my-8">➤<a className='hover:text-blue-500' href="/">Servicios de Soldadura</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </>
    )
}
