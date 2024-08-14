import React from 'react'
import contact from '../images/address-book.png'
import email from '../images/mail.png'
import numero from '../images/phone.png'
import ubication from '../images/map-pin.png'
import servicios from '../images/wrecking-ball.png'
import flecha from '../images/arrow-right.png'

export const Footer = () => {
  return (
    <footer id='contacto' className="flex flex-row ms:flex-wrap  text-sm bg-plomito">
        <div className="w-96 list-none text-white my-5 mx-5">
            <div className="flex justify-center">
                <img src={contact} className='w-6' alt="" />
                <h1 className="text-center">Contactanos</h1>
            </div>
            <li className="mx-5 my-2">
                <div className="flex">
                    <img src={email} className='w-6' alt="" />
                    <span className="mx-2" >Correo</span>
                </div>
            </li>
            <li className="mx-5 my-2">
                <div className="flex">
                    <img src={numero} className='w-6' alt="" />
                    <span className="mx-2">Numero</span>
                </div>
            </li>
            <li className="mx-5 my-2">
                <div className="flex">
                    <div className='w-6'>
                        <img src={ubication} alt="" />
                    </div>
                    <span className="mx-2">
                        Ubicacion
                    </span>
                </div>
            </li>
        </div>
        <div id='xd' className="w-96 list-none text-white my-5 mx-5">
            <div className="flex justify-center">
                <img src={servicios} className='w-6' alt="" />
                <h1 className="text-center">Servicios</h1>
            </div>
        
            <div className='flex flex-row'>
                <div id='xd' className='w-64'>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Planimetría y fabricación</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Transportadores de banda</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Estructuras y Plataformas Acero</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Montaje de estructuras metálicas</a></span>
                        </div>
                    </li>
                    
                </div>
                <div id='xd' className='w-64'>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Servicios de Corte CNC</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Piping en Acero Inoxidable</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Servicios de soldadura</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <div className='w-9'>
                                <img src={flecha} className='w-9' alt="" />
                            </div>
                            <span className="mx-2" ><a href="/" className="hover:text-blue-600">Mano de Obra Calificada</a></span>
                        </div>
                    </li>
                </div>
            </div>
        </div>
    </footer>
  )
}
<style>
    {
        
    }
</style>
