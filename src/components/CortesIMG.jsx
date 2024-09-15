import React from "react";

import Corte from '../images/PIMG.JPG'
import { Footer } from "./Footer";

export function CortesIMG(){
    const data = [
        {
            Imagen: Corte,
        },
        {
            Imagen: Corte,
        },
        {
            Imagen: Corte,
        },
        {
            Imagen: Corte,
        },
        {
            Imagen: Corte,
        },
    ];
    const [active, setActive] = React.useState(
        Corte,
    );

    return(
        <>
        <h1 className="text-center font-extrabold text-4xl my-5 animate-fade-down animate-duration-[3000ms]">
            Cortes CNC
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
                    data.map(({Imagen}, index) =>(
                        <div key={index}>
                            <img 
                                src={Imagen}
                                alt=""
                                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                onClick={() => setActive(Imagen)} 
                            />
                        </div>
                    ))
                }
            </div>
        </div>
        <Footer/>
        </>
    );
}