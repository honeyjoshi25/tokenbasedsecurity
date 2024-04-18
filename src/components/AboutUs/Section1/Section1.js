import React from 'react'
import './Section1.css'
import imgPattern from '../../../assets/images/pattern/img_pattern5.svg'

export const Section1 = () => {
  return (
    <div className="section1Aboutus">
      <div className="aboutusHeader">
        <div style={{ flexDirection: 'column', marginLeft: '5%' }}>
          <header>
            Our mission is to make <br />
            private market investing
            <br />
            inclusive and frictionless
          </header>
          <span>
            Terazo is a private market investment platform <br />
            for issuance and trading of{' '}
            <span style={{ color: '#1e31f9',fontWeight:"normal" }}>security tokens</span> on
            blockchain
          </span>
        </div>
        {/* <br /> The goal is to create equal opportunities for investment with a
        faster and simpler way to trade */}
        <div className="aboutusHeaderImg">
          <img alt="aboutUs" src={imgPattern} />
        </div>
      </div>

      {/* <div className="aboutusSubheader">
        <header>Our Vision</header>
        <span>
          To simplify private market investing and make it inclusive for
          everyone through a regulated, transparent, digital platform. The goal
          is to create equal opportunities for investment with a faster and
          simpler way to trade.
        </span>
      </div> */}
    </div>
  )
}
