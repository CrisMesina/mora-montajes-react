import React from 'react'
import logo from '../images/logo.png'


export const Main = () => {
  return (
    <div className="flex flex-row ms:flex-wrap w-full pb-20">
        <div id='lolete' className="flex sm:flex-wrap place-content-between h-xxl w-auto text-white">
            <img src={logo} alt="Logo de la empresa Mora Montajes" className="flex w-547 my-22 mx-6 animate-fade-down animate-duration-[3000ms] animate-delay-150"/>
        </div>
        <div className="ms:flex-wrap w-auto mx-auto my-auto text-white">
            <h1 className="justify-center text-center text-4xl font-extrabold pb-5 animate-fade-down animate-duration-[3000ms] animate-delay-150">Mora Montajes</h1>
            <p className="w-96 justify-center text-center animate-fade-down animate-duration-[3000ms] animate-delay-150">
              Empresa especialista en va
            </p>
        </div>
    </div>
  )
}
