import React from "react";
import MEM from '../images/MEM.jpeg'
import MEM2 from '../images/MEM2.jpeg'
import MEM3 from '../images/MEM3.jpeg'
import MEM4 from '../images/MEM4.jpeg'
import MEM5 from '../images/MEM5.JPEG'
import { Footer } from "./Footer";
export function MontajesImgs() {
  const data = [
    {
      imgelink:
       MEM,
    },
    {
      imgelink:
        MEM2,
    },
    {
      imgelink:
        MEM3,
    },
    {
      imgelink:
        MEM4,
    },
    {
      imgelink:
        MEM5,
    },
  ];
 
  const [active, setActive] = React.useState(
    MEM,
  );
 
  return (
    <>
        <h1 className='text-center font-extrabold text-4xl my-5 animate-fade-down animate-duration-[3000ms]'>Montaje de Esctructuras Metalicas</h1>
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