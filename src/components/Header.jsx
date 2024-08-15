import React, { useEffect, useRef } from 'react';
import Logo from '../images/logo.png'


export const Header = () => {


  const botonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const boton = botonRef.current;
    const menu = menuRef.current;

    const handleClick = () => {
      console.log('click');
      if (menu) {
        menu.classList.toggle('hidden');
      }
    };

    if (boton) {
      boton.addEventListener('click', handleClick);
    }

    // Cleanup event listener on unmount
    return () => {
      if (boton) {
        boton.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    
    <nav className="flex flex-wrap items-center justify-between p-6 text-center mx-auto my-auto">
        <div className="flex items-center flex-shrink-0 text-white">
            <img src={Logo} className='w-24' alt="" />

        </div>
        <div className="block lg:hidden">
            <button id="boton" ref={botonRef} className="items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div id="menu" ref={menuRef} className="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-semibold">
            <div className="text-sm lg:flex-grow">
                <a href="/mora-montajes-react" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-8">
                    Inicio
                </a>
                <a href="#servicios" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-8">
                    Servicios
                </a>
                <a href="#nosotros" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-8">
                    Sobre Nosotros
                </a>
                <a href="#contacto" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500">
                    Contactanos
                </a>
            </div>
        </div>
    </nav>
  )
}

