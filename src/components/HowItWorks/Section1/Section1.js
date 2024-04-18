import React from 'react'
import './Section1.css'
import imgPattern1 from '../../../assets/images/pattern/icn_pattern.svg'

export const Section1 = () => {
  return (
    <div className="howItWorksSec1">
      <div className="sec1Title">
        <img src={imgPattern1} alt="" />
        <header>
          Investing in private markets <br /> has never been easier
        </header>
        <span>Get started with Terazo in 3 simple steps</span>
      </div>
    </div>
  )
}
