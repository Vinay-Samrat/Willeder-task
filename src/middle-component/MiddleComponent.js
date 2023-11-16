import React from 'react'
import './MiddleComponent.scss';
import firstimage from '../assets/first-image.svg'
import secondimage from '../assets/secong-image.svg'
import thirdimage from '../assets/third-image.svg'

const MiddleComponent = () => {
  return (
    <div>
      <div>
      <div className="middlefirst">
      <article>
        <h1>Loreum</h1>
        <h2>Subtitle</h2>
      </article>
      </div>
      <div className="middleimages">
      <img className="firrst-image" src={firstimage} />
      <img className="firrst-image" src={secondimage}/>
      <img className="firrst-image" src={thirdimage}/>
      </div>
    </div>
    </div>
  )
}

export default MiddleComponent