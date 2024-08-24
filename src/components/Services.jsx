import React from 'react'
import imagen from '../images/nosotros.png'

export const Services = () => {
  return (

    <section className="flex flex-row ms:flex-wrap w-full h-screen text-white">
      <h1 className='w-full text-center my-auto mx-auto text-4xl font-bold' data-aos="fade-down" data-aos-duration="1500">Estas interesado en nuestros servicios?</h1>
      <div className='w-mitad flex-row ms:flex-wrap'>      
        <h1 className='text-center my-10 text-2xl' data-aos="fade-down" data-aos-duration="1500">Lorem ipsum dolor sit amet</h1>
        <p className='text-xl py-9 px-9' data-aos="fade-down" data-aos-duration="1500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vel magni odio. Ut, quaerat pariatur! Non voluptas amet quae quidem corrupti et, ad modi sunt assumenda odio, nisi delectus aperiam!
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
