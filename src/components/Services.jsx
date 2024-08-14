import React from 'react'

export const Services = () => {
  return (
    <section id="servicios" className="flex flex-row ms:flex-wrap  ms:w-full">
        <div className="text-white w-full my-5">
            <h1 className="text-center mx-auto text-2xl" data-aos="fade-down" data-aos-duration="2500">Aqui podras encontrar <span className="text-yellow-800">NUESTROS SERVICIOS Y MAQUINARIAS <span className="text-white">:</span> </span> </h1>
        </div>
        <div className="flex flex-row ms:flex-wrap place-content-between my-10">
           
            <div id="xd" className="w-64 bg-cyan-950 text-white rounded mx-20 my-10 shadow-xl shadow-white hover:scale-125" data-aos="fade-down" data-aos-duration="2500">
                <div> 
                    <img src="https://okdiario.com/img/2018/04/27/como-soldar-aluminio-pasos-620x349.jpg" className="w-80 rounded-b-none brightness-50 hover:brightness-100" alt=""/>
                </div>
                <div className="bg-cyan-950">
                    <h1 className="text-center">Planimetría, detalles y fabricación</h1>
                    <button className="ml-12 my-2 border-2 rounded-full bg-blue-600 border-none w-40 hover:animate-wiggle animate-infinite">
                        <a href="/servicios" className="p-1">Ver mas</a>
                    </button>
                </div>
            </div>
            <div id="xd" className="w-64 bg-cyan-950 text-white rounded mx-20 my-10 shadow-xl shadow-white hover:scale-125" data-aos="fade-down" data-aos-duration="2500">
                <div>
                    <img src="https://okdiario.com/img/2018/04/27/como-soldar-aluminio-pasos-620x349.jpg" className="w-80 rounded-b-none brightness-50 hover:brightness-100" alt=""/>
                </div>
                <div className="bg-cyan-950">
                    <h1 className="text-center">Transportadores de banda para productos granel y cajas</h1>
                    <button className="ml-12 my-2 border-2 rounded-full bg-blue-600 border-none w-40 hover:animate-wiggle animate-infinite">
                        <a href="/servicios" className="p-1">Ver mas</a>
                    </button>
                </div>
            </div>
            <div id="xd" className="w-64 bg-cyan-950 text-white rounded mx-20 my-10 shadow-xl shadow-white hover:scale-125" data-aos="fade-down" data-aos-duration="2500">
                <div>
                    <img src="https://okdiario.com/img/2018/04/27/como-soldar-aluminio-pasos-620x349.jpg" className="w-80 rounded-b-none brightness-50 hover:brightness-100" alt=""/>
                </div>
                <div className="bg-cyan-950">
                    <h1 className="text-center">Estructuras y Plataformas Acero Carbono e Inoxidable</h1>
                    <button className="ml-12 my-2 border-2 rounded-full bg-blue-600 border-none w-40 hover:animate-wiggle animate-infinite">
                        <a href="/servicios" className="p-1">Ver mas</a>
                    </button>
                </div>
            </div>
            
        </div>
    </section>
  )
}
