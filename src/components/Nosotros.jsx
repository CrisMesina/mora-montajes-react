import React from 'react'
import nosotros from '../images/nosotros.png';
import mision from '../images/flag.png';
import vision from '../images/eye.png';
import proposito from '../images/corona.png';

export const Nosotros = () => {
    
  return (
    <section id='nosotros' className="flex flex-row ms:flex-wrap ms:w-full text-white font-semibold bg-black">
        <div className="w-full ms:w-full text-white ">
            <h1 className="text-center font-extrabold text-4xl" data-aos="fade-down" data-aos-duration="1500">Sobre Nosotros</h1>
        </div>
        <div className="w-mitad mt-10">
            <h3 className="text-start ml-20 mt-5 text-2xl" data-aos="fade-right" data-aos-duration="1500">Conócenos</h3>
            <div className="w-547 ms:w-auto my-10 mx-20">
                <p className="text-xl mx-auto my-auto" data-aos="fade-right" data-aos-duration="1500">
                    Somos una empresa especilizada en fabricación y montaje de equipos de proces, destinados a la industria alimenticia, centrales hidroeléctricas de paso, mineria y química.
                </p>
            </div>
        </div>
        <div className="w-mitad">
            <img src={nosotros} className=" w-96 mx-auto my-12 rounded-2xl" alt="" data-aos="fade-left" data-aos-duration="1500" />
        </div>
        <div className='flex flex-row ms:flex-wrap w-full place-content-between'>
            <div className="flex ms:flex-wrap w-64 h-96 mx-20 my-10 bg-plomitoxd rounded-2xl hover:scale-105" data-aos="fade-down" data-aos-duration="1500">
                <div className="my-auto mx-auto">
                    <img src={mision} className='w-14' alt='' />
                </div>
                <div className="text-center">
                    <h3 className="mb-5">Mision</h3>
                    <p className="text-center mb-5">
                        Nuestro principal objetivo es satisfacer los requerimientos de nuestros clientes, garantizando la calidad del producto y la seguridad durante todo el preceso productivo y durante la vida útil de nuestros equipos
                    </p>
                </div>
            </div>
            <div className="flex ms:flex-wrap w-64 h-auto mx-20 my-10 bg-plomitoxd rounded-2xl hover:scale-105" data-aos="fade-down" data-aos-duration="2000">
                <div className="my-auto mx-auto">
                    <img src={vision} className='w-14' alt="" />
                </div>
                <div className="text-center ">
                    <h3 className="mb-5">Vision</h3>
                    <p className="text-center mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut libero qui molestias. Modi praesentium nulla accusantium maiores aperiam</p>
                </div>
            </div>
            <div className="flex ms:flex-wrap w-64 h-auto mx-20 my-10 bg-plomitoxd rounded-2xl hover:scale-105" data-aos="fade-down" data-aos-duration="2000">
                <div className="my-auto mx-auto">
                    <img src={proposito} className='w-14' alt="" />
                </div>
                <div className="text-center">
                    <h3 className="mb-5">Proposito</h3>
                    <p className="text-center mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut libero qui molestias. Modi praesentium nulla accusantium maiores aperiam</p>
                </div>
            </div>
        </div>
    </section>
  )
}
