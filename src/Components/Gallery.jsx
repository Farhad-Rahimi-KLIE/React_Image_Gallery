import React, { useState } from 'react'
import Data from './Data'
import './gallery.css'
const Gallery = () => {

  const [model, setModel] = useState(false);
  const [temp, setTemp] = useState('');

  const getImage = (img)=>{
    setTemp(img);
    setModel(true)
  }

  return (
    <>
    <div className={model ? 'model open' : 'model'}>
      <span className='haha' onClick={()=> setModel(false)}>X</span>
      <img src={temp} alt="" />
    </div>
      <div className="gallery">
        {
          Data.map((curElem, index)=>{
            return (
              <div className="pics" key={index} onClick={()=> getImage(curElem.portfolio)}>
                <img src={curElem.portfolio} alt="" className='w-full'/>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery
