import React from 'react'
import { Data } from './Data'
import './Section3.css'

export const Section3 = () => {
  return (
    <div className="howItWorksSec3">
      <div className="hiwsec3Title">
        <header>Get Returns In 3 Ways</header>
      </div>

      <div className="hiwSec3Cards">
        {Data.map((i,index) => {
          return (
            <div className="hiwSec3card" key={index}>
              <img src={i.img} alt="how-it-works" className="hiwImg" />
              <div className="cardDesc">
                <span>{i.title}</span>
                <p>{i.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
