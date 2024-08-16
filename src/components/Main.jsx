import React from 'react'
import Logo from '../images/logo.png'


export const Main = () => {
  return (
    <div className="flex flex-row ms:flex-wrap w-full pb-2">
      <div class="flex sm:flex-wrap place-content-between my-auto mx-auto text-white">
        <img src={Logo} className='mx-auto my-auto w-547' alt="" />
      </div>
      <div className="ms:flex-wrap w-auto mx-auto my-44 text-white">
          <h1 className="justify-center text-center text-4xl font-extrabold pb-5 animate-fade-down animate-duration-[3000ms] animate-delay-150">Mora Montajes</h1>
          <p className="w-96 justify-center text-center animate-fade-down animate-duration-[3000ms] animate-delay-150">
          Especialistas en  fabricación y montaje de equipos de procesos
          </p>
      </div>
    </div>
  )
}

