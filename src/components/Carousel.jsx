import React from 'react'
import FYM1  from '../images/FYM1.jpg'
import FYM2  from '../images/FYM2.jpg'
import FYM3  from '../images/FYM3.jpg'
import FYM4  from '../images/FYM4.jpg'

export const Carousel = () => {
  return (
    <div className='carousel carousel-center rounded-box w-64 mx-auto'>
    <div id='item1' className='carousel-item relative w-64'>
        <img src={FYM1} alt="" className='w-64' />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href="#item4" className='btn btn-circle'> ❮ </a>
            <a href="#item2" className='btn btn-circle'> ❯ </a>
        </div>
    </div>
    <div id='item2' className='carousel-item relative w-96'>
        <img src={FYM2} alt="" className='w-96' />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href="#item1" className='btn btn-circle'> ❮ </a>
            <a href="#item3" className='btn btn-circle'> ❯ </a>
        </div>
    </div>
    <div id='item3' className='carousel-item relative w-96'>
        <img src={FYM3} alt="" className='w-96' />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href="#item2" className='btn btn-circle'> ❮ </a>
            <a href="#item4" className='btn btn-circle'> ❯ </a>
        </div>
    </div>
    <div id='item4' className='carousel-item relative w-96'>
        <img src={FYM4} alt="" className='w-96' />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
            <a href="#item3" className='btn btn-circle'> ❮ </a>
            <a href="#item1" className='btn btn-circle'> ❯ </a>
        </div>
    </div>
</div>
  )
}

