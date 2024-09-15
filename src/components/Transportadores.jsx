import React from 'react'

import { Footer } from './Footer';
import { Transport } from './Transport';

export const Transportadores = () => {
  return (
    <>
        <h1 className='text-center text-white font-extrabold text-4xl my-5'>Transportadores de Banda</h1>
        <Transport/>
        <Footer/>
    </>
  )
}
