import React, { useState } from 'react'
import './Section4.css'
import img3 from '../../../assets/images/img/right_side_image.svg'
import { Data } from './Data'

import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'



export const Section4 = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  }
  return (
    <div className="hiwSec4">
    <div className="hiwSec4Left">
      <div className="hiwSec4LeftTop">
        <header>Decoding Tokenization</header>
        <span>Simple answers to complex investment questions.</span>
      </div>
      <div className="hiwSec4LeftBottom">
        <IconContext.Provider value={{ color: '#1a60f6', size: '25px' }}>
          <div className="accordionsec4">
            <div className="accordionWrapper">
              {Data.map((item, index) => {
                return (
                  <>
                    <div
                      className="wrap"
                      onClick={() => toggle(index)}
                      key={index}
                    >
                      <span>
                        {clicked === index ? (
                          <FiMinus
                            style={{ marginTop: 15, cursor: 'pointer' }}
                          />
                        ) : (
                          <FiPlus
                            style={{ marginTop: 15, cursor: 'pointer' }}
                          />
                        )}
                      </span>
                      <h3>{item.question}</h3>
                    </div>

                    {clicked === index ? (
                      <div className="dropdown">
                        <p>{item.answer}</p>
                      </div>
                    ) : null}
                  </>
                )
              })}
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
    <div className="hiwSec4Right">
      <img src={img3} alt="" />
    </div>
  </div>
  )
}
