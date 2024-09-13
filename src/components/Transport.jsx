import React from "react";
import Transp from '../images/Transp.jpg'
import Transp2 from '../images/Transp2.jpg'
import Transp3 from '../images/Transp3.jpg'
import Transp4 from '../images/Transp4.jpg'
import Transp5 from '../images/Transp5.jpg'
export function Transport() {
  const data = [
    {
      imgelink:
      Transp,
    },
    {
    imgelink:
      Transp2,
    },
    {
      imgelink:
      Transp3,
    },
    {
      imgelink:
      Transp4,
    },
    {
      imgelink:
      Transp5,
    },
  ];
 
  const [active, setActive] = React.useState(
    Transp,
  );
 
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-mitad mx-auto max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid mx-auto grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 my-5 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}