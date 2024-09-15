import React from "react";
import { Footer } from "./Footer";
import PIMG from '../images/PIMG.JPG'
import PIMG2 from '../images/PIMG2.JPG'
import PIMG3 from '../images/PIMG3.JPG'
import PIMG4 from '../images/PIMG4.JPG'
import PIMG5 from '../images/PIMG5.JPG'


export function PipingImg(){
    const data = [
        {
            Imagen: PIMG,
        },
        {
            Imagen: PIMG2,
        },
        {
            Imagen: PIMG3,
        },
        {
            Imagen: PIMG4,
        },
        {
            Imagen: PIMG5,
        },
    ];
    const [active, setActive] = React.useState(
      PIMG,  
    );

    return(
        <>
        <h1 className="text-center font-extrabold text-4xl my-5 animate-fade-down animate-duration-[3000ms]">
            Piping en Acero Inoxidable
        </h1>
        <div className="grid gap-4 my-5 animate-fade-down animate-duration-[3000ms]">
            <div>
                <img 
                    src={active} 
                    alt=""
                    className="h-auto w-mitad mx-auto max-w-full rounded-lg object-cover object-center md:h-[480px]" 
                />
            </div>
            <div className="grid mx-auto grid-cols-5 gap-4 animate-fade-down animate-duration-[3000ms]">
                {
                    data.map(({ Imagen }, index) =>(
                        <div key={index}>
                            <img 
                                src={Imagen}  
                                alt=""
                                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                onClick={() => setActive(Imagen)} />
                        </div>
                    ))
                }
            </div>
        </div>
        <Footer/>
        </>
    );
}