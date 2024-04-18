import React from 'react'
import './Section1.css'
import img1 from '../../../assets/images/img/img_polygon.png'
import img2 from '../../../assets/images/img/img_Compliance.png'

export const Section1 = () => {
  return (
    <div>
      <div className="section1">
        <p className="section1p">
          <span style={{ color: '#1e31f9' }}>
            {' '}
            Your Access To <br />
            Private Market Investments{' '}
          </span>
        </p>

        <span className="section1span">
          Real estate, Venture Capital and Unlisted Companies
          <br />
          <span style={{ color: '#1e31f9', fontWeight: 'normal' }}>
            {' '}
            Fractional investing{' '}
          </span>{' '}
          made easy for you using blockchain
        </span>
        <div className="homeSec1Img">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img1" />
        </div>
        <div className="inputField">
          <input placeholder="Enter your email address" />
          <button>Get early access</button>
        </div>
      </div>
    </div>
  )
}
