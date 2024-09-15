import React from "react";
import FYM from '../images/FYM1.jpg'
import FYM2 from '../images/FYM2.jpg'
import FYM3 from '../images/FYM3.jpg'
import FYM4 from '../images/FYM4.jpg'
import FYM5 from '../images/FYM5.jpg'
import { Footer } from "./Footer";
export function FyM() {
  const data = [
    {
      imgelink:
       FYM,
    },
    {
      imgelink:
        FYM2,
    },
    {
      imgelink:
        FYM3,
    },
    {
      imgelink:
        FYM4,
    },
    {
      imgelink:
        FYM5,
    },
  ];
 
  const [active, setActive] = React.useState(
    FYM,
  );
 
  return (
    <>
        <h1 className='text-center text-white font-extrabold text-4xl my-5 animate-fade-down animate-duration-[3000ms]'>Planimetria y Fabricacion</h1>
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