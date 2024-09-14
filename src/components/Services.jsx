import React from 'react'
import imagen from '../images/nosotros.png'

export const Services = () => {
  return (

    <section id="servicios" className="flex flex-row ms:flex-wrap w-full h-screen text-white">
      <h1 className='w-full text-center my-auto mx-auto text-4xl font-bold' data-aos="fade-down" data-aos-duration="1500">Estas interesado en nuestros servicios?</h1>
      <div className='w-mitad flex-row ms:flex-wrap'>      
        <h1 className='text-center my-10 text-2xl' data-aos="fade-down" data-aos-duration="1500">Revisa nuestros servicios actuales</h1>
        <p className='text-xl py-9 px-9' data-aos="fade-down" data-aos-duration="1500">
          A dia de hoy contamos con un minimo de 5 servicios activos que podemos otorgar. Con el tiempo puede que se incorporen mas servicios con los que podamos ayudarte en un futuro proximo. Si estas interesado en que servicios podemos otorgarte, puedes verlos presionando el boton "Ver Servicios" o directamente bajando al pie de pagina!
        </p>
        <div className='w-96 text-center mx-auto my-14'>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"  data-aos="fade-down" data-aos-duration="1500">
            <span className='w-full'>
              <a href="#servicios" className='w-full'>Ver Servicios</a>
            </span>
          </button>        
        </div>
      </div>
      <div className='w-mitad'>
        <img id='imagen' src={imagen} alt='' className='w-full h-auto mx-auto my-auto rounded-bl-lg invisible md:visible'  data-aos="fade-down" data-aos-duration="1500"/>
      </div>
    </section>
  )
}
