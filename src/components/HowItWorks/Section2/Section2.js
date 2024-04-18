import React, { useState } from 'react'
import './Section2.css'
import { Slide } from './Slide'
import { BsCircle } from 'react-icons/bs'

export const Section2 = () => {
  const [current, setCurrent] = useState(Slide[0])
  const length = Slide.length
  console.log(length)

  if (!Array.isArray(Slide) || Slide.length <= 0) {
    return null
  }
  return (
    <div className="howItWorksSec2">
      <div className="sec2title">
        <header>Get started with Terazo in 3 simple steps</header>
      </div>
      <div className="sec2Slider">
        <div className="sliderClick">
          <BsCircle
            className={current.id === 1 ? 'active' : 'sliderDot'}
            onClick={() => setCurrent(Slide[0])}
          />
          <BsCircle
            className={current.id === 2 ? 'active' : 'sliderDot'}
            onClick={() => setCurrent(Slide[1])}
          />
          <BsCircle
            className={current.id === 3 ? 'active' : 'sliderDot'}
            onClick={() => setCurrent(Slide[2])}
          />
        </div>
        <div>
          <div className="slide">
            <div className="progressBar">
              <div
                id={
                  current.id === 1
                    ? 'circle1'
                    : current.id === 2
                    ? 'circle2'
                    : 'circle3'
                }
              >
                {current.num}
              </div>
              {/* <div className='progressNum'>{current.num}</div> */}
              <div className="progressText">{current.title}</div>
            </div>
            {/* <img src={current.logoimg} className="Rectangle-27" alt="img" /> */}
            <header className="Headersec1">{current.header}</header>
            <header className="subHeadersec1">{current.subHeader}</header>
            <a
              href="#sec6"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                width: 200,
                marginLeft: '10%',
              }}
            >
              <span className="subSpan">{current.span}</span>
            </a>

            <img src={current.img} className="img_product_step1" alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}
