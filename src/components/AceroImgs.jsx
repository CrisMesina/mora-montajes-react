import React from "react";
import Acero from '../images/acero.jpg'
import Acero2 from '../images/acero2.jpg'
import Acero3 from '../images/acero3.jpg'
import Acero4 from '../images/acero4.jpg'
import Acero5 from '../images/acero5.jpg'
import { Footer } from "./Footer";
export function AceroImgs() {
  const data = [
    {
      imgelink:
       Acero,
    },
    {
      imgelink:
      Acero2,
    },
    {
      imgelink:
      Acero3,
    },
    {
      imgelink:
      Acero4,
    },
    {
      imgelink:
      Acero5,
    },
  ];
 
  const [active, setActive] = React.useState(
    Acero,
  );
 
  return (
    <>
        <h1 className='text-center text-white font-extrabold text-4xl my-5 animate-fade-down animate-duration-[3000ms]'>Estructuras y Plataformas de acero</h1>
        <div className="grid gap-4 my-5 animate-fade-down animate-duration-[3000ms]">
        <div>
          <img
            className="h-auto w-mitad mx-auto max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>
        <div className="grid mx-auto grid-cols-5 gap-4 animate-fade-down animate-duration-[3000ms]">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}