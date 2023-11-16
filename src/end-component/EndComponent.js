import React from 'react'
import './EndComponent.scss';
import firstimage from '../assets/first-image.svg'
import secondimage from '../assets/secong-image.svg'
import thirdimage from '../assets/third-image.svg'
import endimage from '../assets/end-image.svg'

const EndComponent = () => {
  return (
    <div>
      <div>
      <div className="middlefirst">
      <article>
      </article>
      </div>
      <div className="layoutbackground">
            <div className='image-layout' >
            <img className="image-width" src={endimage}/>
            </div>
           <div className="end-text">
            <h4 className='end-text-one'>Loreum ipsum</h4>
            <p className='end-text-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
      </div>
    </div>
    </div>
  )
}

export default EndComponent